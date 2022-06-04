import React, { useState, useEffect } from "react";
import axios from "axios";
import "././../App.css";

export const Card = () => {
  const [index, setIndex] = useState(0);
  const [radioSelected, setRadioSelected] = useState("");
  const [getData, updateGetData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getQuestions/")
      .then((res) => {
        console.log("CARD", res.data.questions);
        updateGetData(res.data.questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelected = (item) => {
    alert(item);
    setRadioSelected(item);
  };
  const handleCompare = (answer) => {
    if (radioSelected.length >= 1 && answer === radioSelected) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="card">
      {getData[index] ? (
        <>
          <div>
            <div>
              <p>{getData[index]?.question}</p>
            </div>
            <div onClick={() => handleSelected(getData[index]?.option1)}>
              <input
                type="radio"
                id="option1"
                name="ans"
                value={getData[index]?.option1}
              />
              <label> {getData[index]?.option1}</label>
            </div>
            <br />
            <div onClick={() => handleSelected(getData[index]?.option2)}>
              <input
                type="radio"
                id="option2"
                name="ans"
                value={getData[index]?.option2}
              />
              <label>{getData[index]?.option2}</label>
            </div>
            <br />
            <div onClick={() => handleSelected(getData[index]?.option3)}>
              <input
                type="radio"
                id="option2"
                name="ans"
                value={getData[index]?.option3}
              />
              <label> {getData[index]?.option3}</label>
            </div>
            <br />
          </div>
          <button
            className="nextButton"
            onClick={() => handleCompare(getData[index]?.answer)}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <p className="sucess">
            Congratulations 👌👌👌 you sucessfully completed the exam
          </p>
        </>
      )}
    </div>
  );
};
