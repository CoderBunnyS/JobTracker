//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority";
//var mongoDB = "http://localhost:4000/";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));