#! /usr/bin/env node

console.log('This script populates some test jobs, Users, categories and jobInstances to your database. Specified database as argument - e.g.: populatedb mongodb://TrackerAdmin:TrackerAdminPassword@cluster0-shard-00-00.euzmb.mongodb.net:27017,cluster0-shard-00-01.euzmb.mongodb.net:27017,cluster0-shard-00-02.euzmb.mongodb.net:27017/TrackerDatabase?ssl=true&replicaSet=atlas-va16fv-shard-0&authSource=admin&retryWrites=true&w=majority');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

// if (!userArgs[0].startsWith('mongodb')) {
//     console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
//     return
// }

var async = require('async')
var Job = require('./models/Job')
var User = require('./models/user')
var Category = require('./models/category')
var jobInstance = require('./models/jobInstance')


var mongoose = require('mongoose');
//const { getMaxListeners } = require('./models/User');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var categories = []
var jobs = []
var jobinstances = []

function userCreate(firstName, lastName, email, password, cb) {
  userdetail = {firstName:firstName , lastName: lastName, email: email, password: password }
  
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}

function categoryCreate(name, cb) {
  var category = new Category({ name: name });
       
  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Category: ' + category);
    categories.push(category)
    cb(null, category);
  }   );
}

function jobCreate(title, company, appliedDate, user, category, cb) {
  jobdetail = { 
    title: title,
    company: company,
    user: user,
    appliedDate: appliedDate,
    //category: category
  }
  if (category != false) jobdetail.category = category
    
  var job = new Job(jobdetail);    
  job.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Job: ' + job);
    jobs.push(job)
    cb(null, job)
  }  );
}


function jobInstanceCreate(job, imprint, category, cb) {
  jobinstancedetail = { 
    job: job,
    imprint: imprint
  }    
  //if (category != false) jobInstanceDetail.category = category
  //if (follow_up != false) jobInstanceDetail.follow_up = follow_up
    
  var jobinstance = new jobInstance(jobinstancedetail);    
  jobInstance.save(function (err) {
    if (err) {
      console.log('ERROR CREATING jobInstance: ' + jobinstance);
      cb(err, null)
      return
    }
    console.log('New jobInstance: ' + jobinstance);
    jobinstances.push(jobinstance)
    cb(null, job)
  }  );
}


function createCategoryUsers(cb) {
    async.series([
        function(callback) {
          userCreate('Patrick', 'Rothfuss', '1973-06-06@email.com', "false1800", callback);
        },
        function(callback) {
          userCreate('Ben', 'Bova', '1932-11-8@gf.com', "false1800", callback);
        },
        function(callback) {
          userCreate('Isaac', 'Asimov', '1920-01-02@gmail.com', "false1800", callback);
        },
        function(callback) {
          userCreate('Bob', 'Billings', "anotheremail@gmail.com", "false1800", callback);
        },
        function(callback) {
          userCreate('Jim', 'Jones', '1971-12-16@gmail.com', "false1800", callback);
        },
        function(callback) {
          categoryCreate("Applications", callback);
        },
        function(callback) {
          categoryCreate("Self Care", callback);
        },
        function(callback) {
          categoryCreate("Network", callback);
        },
        function(callback) {
          categoryCreate("Learn", callback);
        },
        ],
        // optional callback
        cb);
}


function createJobs(cb) {
    async.parallel([
        function(callback) {
          jobCreate('The Name of the Wind', 'princesses', '97/81/4732', users[0], [categories[0],], callback);
        },
        function(callback) {
          jobCreate("Wise Man", 'Kingkiller', '97/88/4013', users[0], [categories[0],], callback);
        },
        function(callback) {
          jobCreate("Slow Regard", 'University', '9/7/1980', users[0], [categories[0],], callback);
        },
        function(callback) {
          jobCreate("Ape", "Humankind", '9/7/8076', users[1], [categories[1],], callback);
        },
        function(callback) {
          jobCreate("Wave","Bova", '9/7/8076', users[1], [categories[1],], callback);
        },
        function(callback) {
          jobCreate('Test job 1', 'Summary of test job 1', '06/06/1960', users[4], [categories[0],categories[1]], callback);
        },
        function(callback) {
          jobCreate('Test job 2', 'Summary of test job 2', '05/03/1982', users[4], false, callback)
        }
        ],
        // optional callback
        cb);
}


function createJobInstances(cb) {
    async.parallel([
        function(callback) {
          jobInstanceCreate(jobs[0], 'London Gollancz, 2014.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[1], ' Gollancz, 2011.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[2], ' Gollancz, 2015.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[3], 'New York Tom Doherty Associates, 2016.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[3], 'New York Tom Doherty Associates, 2016.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[3], 'New York Tom Doherty Associates, 2016.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[0], 'Imprint XXX2', "Jobs", 06/12/2021, callback)
        },
        function(callback) {
          jobInstanceCreate(jobs[1], 'Imprint XXX3', "Jobs", 06/12/2021, callback)
        }
        ],
        // Optional callback
        cb);
}



async.series([
    createCategoryUsers,
    createJobs,
    createJobInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('JOBInstances: '+jobinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



