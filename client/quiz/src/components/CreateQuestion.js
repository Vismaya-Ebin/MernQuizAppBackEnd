import React, { useState } from "react";
import axios from "axios";
import { POST_API } from "../endpoint.js";
import "../App.css";

export function CreateQuestion() {
  const [details, updateDetails] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    answer: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name: name, value: value });
    //if we didni added preve State it will nont remember prev state only take currentv state hence ...prev is important
    updateDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
   
    e.preventDefault();

     await axios
      .post(`${POST_API}`, details)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });

  
  };

  console.log(details);

  return (
    <div className="create">
        <h1>Create Question!!</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          id="question"
          value={details.question}
          name="question"
          placeholder=" Question"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="option1"
          value={details.option1}
          name="option1"
          placeholder=" Option1"
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={details.option2}
          id="option2"
          name="option2"
          placeholder=" Option2"
        />
        <br />
        <input
          type="text"
          value={details.option3}
          onChange={handleChange}
          id="option3"
          name="option3"
          placeholder=" Option3"
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          id="answer"
          name="answer"
          value={details.answer}
          placeholder="Answer"
        />
        <br />
        <button
          type="submit"
          className="submitBtn"  onClick={() => handleSubmit()}
          
        >
          Submit
        </button>
      </form>
    </div>
  );
}
