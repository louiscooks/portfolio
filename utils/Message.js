class Message {
	constructor(name, from, text) {
		(this.from = from),
			(this.to = "louisdhona@gmail.com"),
			(this.subject = name + ` <${from}>` + " sent a message from portfolio"),
			(this.text = text.trim());
	}
}

module.exports = Message;
