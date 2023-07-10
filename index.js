// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/whoami", function (req, res) {
	const ip = req.ip; // Validate and sanitize the IP address if necessary

	// Handle potential errors if headers are missing
	const language = req.get("Accept-Language") || "Unknown";
	const software = req.get("user-agent") || "Unknown";

	res.json({
		ipaddress: ip,
		language: language,
		software: software,
	});
});

/**
 * ❤️‍🔥❤️‍🔥❤️‍🔥 Resource used: https://expressjs.com/en/5x/api.html#req ❤️‍🔥❤️‍🔥❤️‍🔥
 * `req, res` are values on the `express` object
 *  refer to those docs for instructions on api usage
 *
 * result:
 * {
 *  ipaddress: remote address
 *  language: accept-language
 *  software: user-agent
 * }
 *
 * network tab:
 * GENERAL:
 * Remote Address: 172.67.171.152:443
 *
 * REQUEST HEADERS:
 * Accept-Language: en-US,en;q=0.9
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
 *
 */

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
