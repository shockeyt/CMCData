var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegisterSchema = new Schema({
	peak: String,
	first_name: String,
	last_name: String,
	email: String,
	zipcode: String,
	CMC_member: Boolean,
	CMC_past_member: Boolean,
	birth_year: String
});

var Register = mongoose.model('Register', RegisterSchema);
module.exports = Register;