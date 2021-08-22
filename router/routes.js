const express = require("express");
const router = express.Router();
const sanitizeHtml = require("sanitize-html");
const sendMail = require("../config/nodemailer");
const Message = require("../utils/Message");
router.get("/", (req, res) => {
	res.render("home");
});
router.get("/portfolio", (req, res) => {
	res.render("portfolio");
});
router.get("/contact", (req, res) => {
	res.render("contact");
});
router.post("/contact", (req, res) => {
	let { name, from, text } = req.body;
	name = sanitizeHtml(name);
	text = sanitizeHtml(text);
	const message = new Message(name, from, text);
	sendMail(message, req, res);
	// redirecting in sendMail callback
});

module.exports = router;
