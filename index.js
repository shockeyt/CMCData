var express = require('express');
var app = express();
var db = require('./models');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/public'));

// app.get('/', function homepage (req, res) {
// 	res.sendFile(__dirname + '/public/index.html');
// });


app.get('/api', function api_index (req, res) {
	res.json({message: "server running"});
});

//****SAVED PEAK REST ROUTES****

//index
app.get('/peak', function (req, res) {
	db.Peak.find()
	.exec(function(err, peak) {
		if (err) {return console.log("index error:" + err);}
		res.json(peak);
	});
});

//show
app.get('/peak/:id', function (req, res) {
	db.Peak.findOne({_id: req.params.id}, function(err, peak) {
		console.log(req.params.id);
		res.json(peak);
	});
});

//post
app.post('/peak', function (req, res) {
	var newPeak = new db.Peak({
		name: req.body.name
	});
	newPeak.save(function (err, peak) {
		if (err) {
			return console.log("save error: " + err);
		}
		console.log("saved ", peak);
		res.json(peak);
	});
});

//delete
app.delete('/peak/:id', function (req, res) {
	var id = req.params.id;
	db.Peak.findOneAndRemove({_id: id}, function (err, deletedPeak) {
		console.log("deleted ", deletedPeak);
		res.json(deletedPeak);
	});
});

//****REGISTER REST ROUTES****

//get index
app.get('/register', function (req, res) {
	db.Register.find()
	.exec(function(err, register) {
		if (err) {return console.log("index error:" + err);}
		res.json(register);
	});
});

//get show
app.get('/register/:id', function (req, res) {
	db.Register.findOne({_id: req.params.id}, function(err, register) {
		console.log(req.params.id);
		res.json(register);
	});
});

//post
app.post('/register', function (req, res) {
	var newRegister = new db.Register({
		peak: req.body.peak,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		zipcode: req.body.zipcode,
		CMC_member: req.body.CMC_member,
		CMC_past_member: req.body.CMC_past_member,
		birth_year: req.body.birth_year
	});
	newRegister.save(function (err, register) {
		if (err) {
			return console.log("save error: " + err);
		}
		console.log("saved ", register);
		res.json(register);
	});
});

//delete
app.delete('/register/:id', function (req, res) {
	var id = req.params.id;
	db.Register.findOneAndRemove({_id: id}, function (err, deletedRegister) {
		console.log("deleted ", deletedRegister);
		res.json(deletedRegister);
	});
});

//update
app.put('/register/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.Register.findOne({_id: id}, function (err, updatedRegister) {
		if (err) res.json({message: 'find error: ' + err});
		if (req.body.peak) updatedRegister.peak = req.body.peak;
		if (req.body.first_name) updatedRegister.first_name = req.body.first_name;
		if (req.body.last_name) updatedRegister.last_name = req.body.last_name;
		if (req.body.email) updatedRegister.email = req.body.email;
		if (req.body.zipcode) updatedRegister.zipcode = req.body.zipcode;
		if (req.body.CMC_member) updatedRegister.CMC_member = req.body.CMC_member;
		if (req.body.CMC_past_member) updatedRegister.CMC_past_member = req.body.CMC_past_member;
		if (req.body.birth_year) updatedRegister.birth_year = req.body.birth_year;

		updatedRegister.save(function(err) {
			if (err) res.json({message: 'could not update'});
			console.log('updated ', updatedRegister);
			res.json({message: 'Register updated'});
		});
	});
});








app.listen(process.env.PORT || 3000, function() {
	console.log("express server running on localhost:3000");
});