const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    date:String,
    time:String,
    description:String,
    url:String,
    name:String,
    address:String,
    id:String,
    title:String,
    from:String
});


module.exports = mongoose.model('Event', EventSchema);


