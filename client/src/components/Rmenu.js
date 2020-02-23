import React from "react";
import { Link } from "react-router-dom";

import  "../css/Rmenu.css";

const Rmenu = (props) => {

  return (
    <div className="wrapper">
      <div className="container">
          
          <div className="rmenu">
      <ul>
        <li>
          <Link onClick={props.handleClick} className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className="link" to="/blogs">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} className="link" to="/resume">
            Resume
          </Link>
        </li>
        
        <li>
          <Link onClick={props.handleClick} className="link" to="/contact">
            Contact
          </Link>
        </li>
        </ul>
        </div>
      </div> 
    </div>
  );
};

export default Rmenu;

