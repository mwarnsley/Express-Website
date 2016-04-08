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
	var transporter = nodemailer.createTransporter({
		service: "Gmail",
		auth: {
			user: "marcus.warnsley@gmail.com".
			pass: ""
		}
	});

	var mailOptions = {
		from: "Marcus Warnsley <marcus.warnsley@gmail.com>",
		to: "marcus.warnsley@gmail.com",
		subject: "Website Submission",
		text: "You have a submission with the following details... Name: " +req.body.name + "Email: " +req.body.email+ "Message: " +req.body.message,
		html: "<p>You have a submission with the following details...</p><ul><li>Name: "+req.body.name+"</li><li>Email: "+req.body.email+"</li><li>Message: "+req.body.message+"</li></ul>"
	};

	transporter.sendMail(mailOptions, function(erroe, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent: '+ info.response);
			res.redirect('/');
		}
	});
});


//running the server on port 3000
app.listen(port);

console.log("Server is running on port: " + port);
