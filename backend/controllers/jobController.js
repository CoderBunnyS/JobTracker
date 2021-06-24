var Job = require('../models/job');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
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
