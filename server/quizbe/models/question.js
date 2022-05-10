//creating models

const mongoose = require('mongoose');

//Schema is used to define the structure of the data
const questionSchema = mongoose.Schema({
    question: {type:String},
    option1: {type:String},
    option2: {type:String},
    option3: {type:String},
    answer: {type:String},
});


//model is used to create the collection in db
// question -- document
// questionSchema -- schema
const questionModel = mongoose.model('question', questionSchema);

module.exports = questionModel;