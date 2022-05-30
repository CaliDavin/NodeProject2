var express = require('express');
const authorController = require('../controllers/authorController');
const bookController = require('../controllers/bookController');
const publisherController = require('../controllers/publisherController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Author routes
router.route('/author').post(authorController.createAuthor)
router.route('/author/:_id').get(authorController.getAuthor)
router.route('/author/:_id').put(authorController.updateAuthor)
router.route('/author/:_id').delete(authorController.deleteAuthor)

// Publisher routes
router.route('/publisher').post(publisherController.createPublisher)
router.route('/publisher/:_id').get(publisherController.getPublisher)
router.route('/publisher/:_id').put(publisherController.updatePublisher)
router.route('/publisher/:_id').delete(publisherController.deletePublisher)

// Book routes
router.route('/book').post(bookController.createBook)-
router.route('/book/:_id').get(bookController.getBook)
router.route('/book/:_id').put(bookController.updateBook)
router.route('/book/:_id').delete(bookController.deleteBook)

module.exports = router;
