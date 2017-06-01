var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeakSchema = new Schema({
	name: String
});

var Peak = mongoose.model('Peak', PeakSchema);
module.exports = Peak;