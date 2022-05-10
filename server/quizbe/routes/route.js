const express = require('express');
const router = express.Router();

const {getQuestions,postQuestions,updateQuestions,deleteQuestion} = require('../controllers/quiz');

 router.route('/getQuestions').get(getQuestions);

router.route('/postQuestions').post(postQuestions);

router.route('/updateQuestions/:id').put(updateQuestions);

router.route('/deleteQuestion/:id').delete(deleteQuestion);

module.exports = router;