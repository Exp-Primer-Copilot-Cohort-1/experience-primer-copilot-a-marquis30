// Create web server

var express = require('express');
var router = express.Router();

// GET /comments
router.get('/', function(req, res, next) {
  res.send('Comments');
});

// POST /comments
router.post('/', function(req, res, next) {
  res.send('Post a comment');
});

// GET /comments/commentId
router.get('/:commentId', function(req, res, next) {
  res.send('Get comment with ID ' + req.params.commentId);
});

// PUT /comments/commentId
router.put('/:commentId', function(req, res, next) {
  res.send('Update comment with ID ' + req.params.commentId);
});

// DELETE /comments/commentId
router.delete('/:commentId', function(req, res, next) {
  res.send('Delete comment with ID ' + req.params.commentId);
});

module.exports = router;