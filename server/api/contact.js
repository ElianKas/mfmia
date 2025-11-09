import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Validate the request body
	if (!body.prename || !body.name || !body.email || !body.message) {
		return {
			success: false,
			error: 'Vorname, Name, Email und Ihre Nachricht werden benötigt.',
		};
	}

	if (!body.recaptchaToken) {
		return {
			success: false,
			error: 'reCAPTCHA-Token wird benötigt',
		};
	}

	const formData = new URLSearchParams();
	formData.append('secret', secretKey);
	formData.append('response', body.recaptchaToken);

	const recaptchaData = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		body: formData,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	if (!recaptchaData.success) {
		return {
			success: false,
			error: recaptchaData['error-codes'],
		};
	}

	// Verify action matches
	if (recaptchaData.action !== 'submit') {
		return {
			success: false,
			error: 'Invalid reCAPTCHA action',
		};
	}

	/* const checkMemberAndGodfather = () => {
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
	}; */

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
	/* let clientMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <newsletter@miteinander-fuer-afrika.de>', // Sender address
		to: body.email, // Client's email
		subject:
			'Newsletter-Anmeldung von Miteinander - für Menschen in Afrika e. V.', // Subject line
		text: `Hallo ${body.name},\n\nDanke für die Anmeldung zum Newsletter!`, // Plain text body
	}; */

	// Set up email data for the host
	let hostMailOptions = {
		from: '"Miteinander für Menschen in Afrika e.V." <info@miteinander-fuer-afrika.de>', // Sender address
		to: process.env.EMAIL, // Host's email
		cc: body.email, // Client's email
		subject: 'Anfrage über Homepage an Miteinander - für Menschen in Afrika e. V.', // Subject line
		text: `Anrede: ${body.title}\nVorname: ${body.prename}\nName: ${body.name}\nStraße / Nr.: ${body.street}\nPLZ / Ort: ${body.city}\nTelefon / Mobil: ${body.phone}\nE-Mail: ${body.email}\n\nIhre Mitteilung:\n${body.message}\n\nDatenschutzbestimmung: ja`, // Plain text body
	};

	try {
		// Send confirmation email to the client
		/* await transporter.sendMail(clientMailOptions); */
		/* console.log('Confirmation email sent to client: %s', body.email); */

		// Send notification email to the host
		await transporter.sendMail(hostMailOptions);
		/* console.log(
			'Notification email sent to host: %s',
			process.env.RECEIVER_EMAIL
		); */

		return {
			success: true,
			message: 'Contact request sent successfully',
		};
	} catch (error) {
		console.error('Error sending email: %s', error);
		return {
			success: false,
			error: 'Failed to send contact request',
		};
	}
});
