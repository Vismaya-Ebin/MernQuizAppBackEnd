const express = require("express");
const router = express.Router();

const {
  getQuestions,
  postQuestions,
  updateQuestions,
  deleteQuestion,
  getQuestionsById,
} = require("../controllers/quiz");

router.route("/getQuestions").get(getQuestions);

router.route("/getQuestionsById/:id").get(getQuestionsById);

router.route("/postQuestions").post(postQuestions);

router.route("/updateQuestions/:id").put(updateQuestions);

router.route("/deleteQuestion/:id").delete(deleteQuestion);

module.exports = router;
