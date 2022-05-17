import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">
        <a  href="#">
          Quiz App
        </a>
      </Link>

      <Link to={"/createQuestion"}>
        {" "}
        <a  href="#">
          Create Quiz
        </a>
      </Link>

      <Link to={"/editQuestion"}>
        <a href="#">
          Edit Quiz
        </a>
      </Link>
    </div>
  );
};
