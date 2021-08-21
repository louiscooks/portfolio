if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");

const path = require("path");
const ejsMate = require("ejs-mate");
const helmet = require("./helmet");
const flash = require("connect-flash");
const session = require("express-session");
const ExpressError = require("./utils/ExpressError");

const app = express();

const secret = process.env.SECRET || "thisisnotagoodsecret";

const sessionConfig = {
	name: "sess",
	secret,
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7
	}
};

app.use(session(sessionConfig));
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet.helmet());
app.use(helmet.contentSecurity);
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	res.locals.currentUser = req.user;
	res.locals.url = req.originalUrl;
	next();
});

const routes = require("./router/routes");
// routes
app.use("", routes);

// error handling middleware
app.all("*", (req, res, next) => {
	next(new ExpressError("Page Not Found", 404));
});
app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = "Oh No, Something Went Wrong!";
	res.status(statusCode).render("error", { err });
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
