const questionModel = require("../models/question");
const getQuestions = async (req, res) => {
  try {
    //getting all the questions from db using model
    const questions = await questionModel.find({});
    const obj = {message:"Fetched data successfully","questions":questions}
    if (questions) {
      res.json(obj);
    }
  } catch (err) {
    console.log(err);
  }
};

const postQuestions = async (req, res) => {
  try {
    const questions = await questionModel({
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      answer: req.body.answer,
    });
    //save() to DB
    const createData = await questions.save();
    const obj ={
      message:"Data saved successfully",
      createData: req.body
    }
    if (createData) {
      res.send(obj);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateQuestions = async (req, res) => {
  try {
    //req.params.id = we will get from url
    const updateData = await questionModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updateData) {
      res.send({message:` Update data successfully`,data:req.body});
    }
  } catch (err) {
    console.log(err);
  }
};

const getQuestionsById = async (req, res) => {
  try {
    //req.params.id = we will get from url
    const getData = await questionModel.findById(req.params.id);
    if (getData) {
      res.send(getData);
    }
  } catch (err) {
    console.log(err);
  }
};
const deleteQuestion = async (req, res) => {
  try {
    const deleQuestion = await questionModel.findByIdAndDelete(req.params.id);
    if (deleQuestion) {
      res.send(`Delete data successfully`);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getQuestions,
  postQuestions,
  updateQuestions,
  deleteQuestion,
  getQuestionsById,
};
