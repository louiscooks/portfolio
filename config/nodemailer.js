const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: `${process.env.EMAIL_USER}`,
		pass: `${process.env.EMAIL_PASS}`
	}
});

const sendMail = (message, req, res) => {
	transport.sendMail(message, function (err, info) {
		if (err) {
			console.log(err);
			req.flash("error", "Failed to send message.");
			res.redirect("/contact");
		}
		console.log(info);
		req.flash("success", "Message has been sent!");
		res.redirect("/contact");
	});
};
module.exports = sendMail;
