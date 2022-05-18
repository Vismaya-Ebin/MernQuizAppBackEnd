import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export function EditQuestion() {
  const [counter, setCounter] = useState(0);
  const [getData, updateGetData] = useState([]);
  //Array of object for POST API call
  const [question, updateQuestions] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    answer: "",
  });
  const [getId, updatedId] = useState("");

  const getAllCurrentQuestion = async () => {
    axios
      .get("http://localhost:4000/getQuestions/")
      .then((res) => {
        console.log("Get allquestions on left", res.data);
        updateGetData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllCurrentQuestion();
  }, [counter]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    updateQuestions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (id) => {
    console.log("handleSubmit", id, question);
    await axios
      .put("http://localhost:4000/updateQuestions/" + id, question)
      .then((res) => {
        console.log("res", res);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSelected = async (item) => {
    console.log("handleSelected", item);
    await axios
      .get(`http://localhost:4000/getQuestionsById/${item._id}`)
      .then((res) => {
        console.log("res", res);
        updatedId(res.data._id);
        if (res.data) {
          updateQuestions({
            question: res.data.question,
            option1: res.data.option1,
            option2: res.data.option2,
            option3: res.data.option3,
            answer: res.data.answer,
          });
          console.log("QUESTION", question);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const deleteItem = async (id) => {
    await axios
      .delete(`http://localhost:4000/deleteQuestion/${id._id}`)
      .then((res) => {
        console.log("res", res);

        setCounter(counter + 1);
        console.log("counter", counter);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const deleteBtn = async (id) => {
    console.log("deleteBtn", id);
    deleteItem(id);
  };
  return (
    <div className="App">
      <div className="main">
        <ul>
          {getData?.map((data, index) => {
            return (
              <li key={index}>
                {data.question}
                <button
                  className="editBtn"
                  onClick={() => {
                    handleSelected(data);
                  }}
                >
                  Edit
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => {
                    deleteBtn(data);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="money">
        <form>
          <input
            type="text"
            placeholder="Question"
            id="question"
            name="question"
            value={question.question}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Option1"
            id="option1"
            name="option1"
            value={question.option1}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Option2"
            onChange={handleChange}
            id="option2"
            value={question.option2}
            name="option2"
          />
          <br />
          <input
            type="text"
            placeholder="Option3"
            onChange={handleChange}
            id="option3"
            name="option3"
            value={question.option3}
          />
          <br />
          <input
            type="text"
            placeholder="Answer"
            id="answer"
            name="answer"
            value={question.answer}
            onChange={handleChange}
          />
          <br />
          <button
            type="button"
            className="submitBtn"
            onClick={() => handleSubmit(getId)}
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
