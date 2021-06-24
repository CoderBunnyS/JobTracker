var Job = require('../models/Job');
var User = require('../models/User');
var Category = require('../models/category');
var JobInstance = require('../models/jobinstance');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        job_count: function(callback) {
            Job.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        job_instance_count: function(callback) {
            JobInstance.countDocuments({}, callback);
        },
        job_instance_available_count: function(callback) {
            JobInstance.countDocuments({status:'Available'}, callback);
        },
        user_count: function(callback) {
            User.countDocuments({}, callback);
        },
        category_count: function(callback) {
            Category.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'ArtemisTracker', error: err, data: results });
    });
};

// Display list of all jobs.
exports.job_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Job list');
};

// Display detail page for a specific job.
exports.job_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Job detail: ' + req.params.id);
};

// Display job create form on GET.
exports.job_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Job create GET');
};

// Handle job create on POST.
exports.job_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Job create POST');
};

// Display job delete form on GET.
exports.job_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Job delete GET');
};

// Handle job delete on POST.
exports.job_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Job delete POST');
};

// Display job update form on GET.
exports.job_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Job update GET');
};

// Handle job update on POST.
exports.job_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Job update POST');
};
