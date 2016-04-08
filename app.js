//setting up all the variables and adding the variable dependencies
var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	nodeMailer = require("nodemailer"),
	port = 3000,
	app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//setting up the middleware of node
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set the static folder as the public folder
app.use(express.static(path.join(__dirname, "public")));

//creating a route
app.get("/", function(req, res){
	res.render("index", {title: "Welcome"});
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.post("/contact/send", function(req, res){
	console.log("TEST");
});


//running the server on port 3000
app.listen(port);

console.log("Server is running on port: " + port);
