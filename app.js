//setting up all the variables and adding the variable dependencies
var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	nodeMailer = require("nodemailer"),
	port = 3000,
	app = express();

//setting up the middleware of node
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//running the server on port 3000
app.listen(port);

console.log("Server is running on port: " + port);
