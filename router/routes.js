const express = require("express");
const router = express.Router();
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
	const { name, from, text } = req.body;
	const message = new Message(name, from, text);
	sendMail(message, req, res);
	//redirecting in sendMail callback
});

module.exports = router;
