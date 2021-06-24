var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobsRouter = require('./routes/jobs');  //Import routes for "catalog" area of site

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs', jobsRouter);  // Add jobs routes to middleware chain.

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites";
//var mongoDB = "http://localhost:4000/";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');