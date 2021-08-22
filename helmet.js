const helmet = require("helmet");

const scriptSrcUrls = ["https://cdn.jsdelivr.net", "https://code.jquery.com"];
const styleSrcUrls = ["https://cdn.jsdelivr.net"];
const connectSrcUrls = [];
const fontSrcUrls = [];
module.exports.helmet = helmet;
module.exports.contentSecurity = helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: [],
		connectSrc: ["'self'", ...connectSrcUrls],
		scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
		styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
		workerSrc: ["'self'", "blob:"],
		childSrc: ["blob:"],
		objectSrc: [],
		imgSrc: [
			"'self'",
			"blob:",
			"data:",
			"https://images.unsplash.com",
			"https://res.cloudinary.com"
		],
		fontSrc: ["'self'", ...fontSrcUrls]
	}
});
