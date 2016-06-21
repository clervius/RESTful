var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var BearSchema = new Schema({
    fname: String,
    lname: String
});

module.exports = mongoose.model('Bear', BearSchema);