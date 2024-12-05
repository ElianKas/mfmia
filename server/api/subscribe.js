// server/api/subscribe.js
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Validate the request body
	if (!body.email || !body.name) {
		return {
			success: false,
			error: 'Name und Email werden benötigt',
		};
	}

	const checkMemberAndGodfather = () => {
		let text = '';
		if (body.isMember) {
			text += 'Mitglied: Ja\n';
		} else {
			text += 'Mitglied: Nein\n';
		}
		if (body.isGodfather) {
			text += 'Patin/Pate: Ja\n';
		} else {
			text += 'Patin/Pate: Nein\n';
		}
		return text;
	};

	// Create a transporter object using SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'w0153246.kasserver.com', // Replace with your SMTP server
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.NEWSLETTER_EMAIL, // Replace with your email
			pass: process.env.NEWSLETTER_EMAIL_PASSWORD, // Replace with your email password
		},
	});

	// Set up email data for the client
	let clientMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <newsletter@miteinander-fuer-afrika.de>', // Sender address
		to: body.email, // Client's email
		subject:
			'Newsletter-Anmeldung von Miteinander - für Menschen in Afrika e. V.', // Subject line
		text: `Hallo ${body.name},\n\nDanke für die Anmeldung zum Newsletter!`, // Plain text body
	};

	// Set up email data for the host
	let hostMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <newsletter@miteinander-fuer-afrika.de>', // Sender address
		to: process.env.NEWSLETTER_EMAIL, // Host's email
		subject:
			'Newsletter-Anmeldung von Miteinander - für Menschen in Afrika e. V.', // Subject line
		text: `Name: ${body.name}\nEmail: ${
			body.email
		}\n${checkMemberAndGodfather()} `, // Plain text body
	};

	try {
		// Send confirmation email to the client
		await transporter.sendMail(clientMailOptions);
		/* console.log('Confirmation email sent to client: %s', body.email); */

		// Send notification email to the host
		await transporter.sendMail(hostMailOptions);
		/* console.log(
			'Notification email sent to host: %s',
			process.env.RECEIVER_EMAIL
		); */

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
