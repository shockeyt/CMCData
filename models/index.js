var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI ||
				  process.env.MONGOLAB_URI ||
				  process.env.MONGOHQ_URL ||
				  'mongodb://localhost/cmc');

module.exports.Register = require('./register.js');
module.exports.Peak = require('./peak.js');
