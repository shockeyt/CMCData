var db = require('./models');

db.Register.remove({}, function(err, registers) {
	if (err) {
		console.log("Error: ", err);
	}
	console.log("removed all registers");
});

var Registrations = [
	{
		peak: "Mount Elbert",
		first_name: "Tyler",
		last_name: "Shockey",
		email: "test@test.com",
		zipcode: "80003",
		CMC_member: true,
		CMC_past_member: false,
		birth_year: "1985"
	},
	{
		peak: "Mount Evans",
		first_name: "John",
		last_name: "Doe",
		email: "john@doe.com",
		zipcode: "80204",
		CMC_member: false,
		CMC_past_member: true,
		birth_year: "1975"
	},
];

db.Register.create(Registrations, function(err, registers) {
	if (err) {
		console.log("Error: ", err);
	} else {
		console.log("Created new registers ", registers);
		process.exit();
	}
});