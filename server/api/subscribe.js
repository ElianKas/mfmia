// server/api/subscribe.js
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Validate the request body
	if (!body.email || !body.firstName) {
		return {
			success: false,
			error: 'Email and first name are required',
		};
	}

	// Create a transporter object using SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'w0153246.kasserver.com', // Replace with your SMTP server
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL, // Replace with your email
			pass: process.env.EMAIL_PASSWORD, // Replace with your email password
		},
	});

	// Set up email data for the client
	let clientMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <info@miteinander-fuer-afrika.de>', // Sender address
		to: body.email, // Client's email
		subject: 'Newsletter Subscription', // Subject line
		text: `Hello ${body.firstName},\n\nThank you for subscribing to our newsletter!`, // Plain text body
	};

	// Set up email data for the host
	let hostMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <info@miteinander-fuer-afrika.de>', // Sender address
		to: process.env.EMAIL, // Host's email
		subject: 'New Newsletter Subscription', // Subject line
		text: `Hello,\n\nYou have received a new newsletter subscription with the following details:\n\nEmail: ${body.email}\nFirst Name: ${body.firstName}`, // Plain text body
	};

	try {
		// Send confirmation email to the client
		await transporter.sendMail(clientMailOptions);
		console.log('Confirmation email sent to client: %s', body.email);

		// Send notification email to the host
		await transporter.sendMail(hostMailOptions);
		console.log(
			'Notification email sent to host: %s',
			process.env.RECEIVER_EMAIL
		);

		return {
			success: true,
			message: 'Subscription request sent successfully',
		};
	} catch (error) {
		console.error('Error sending email: %s', error);
		return {
			success: false,
			error: 'Failed to send subscription request',
		};
	}
});
