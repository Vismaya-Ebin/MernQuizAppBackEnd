import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">Quiz App</Link>

      <Link to={"/createQuestion"}> Create Quiz</Link>

      <Link to={"/editQuestion"}>Edit Quiz</Link>
    </div>
  );
};
