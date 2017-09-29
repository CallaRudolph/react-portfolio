import React from "react";
import { Link } from 'react-router-dom';
import Dots from './../images/dots.jpg';

function Header(){
  var link = {
    paddingTop: "10",
    paddingRight: "5"
  }
  var header = {
    backgroundImage: "url(" + Dots + ")",
    textShadow: "1px 1px white",
    opacity: ".87",
    color: "#290025"
  }
  return (
    <div style={header} className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h3>Portfolio</h3>
          <p><em>Thanks, <a href="https://developer.github.com/v3/">GitHub API</a></em></p>
        </div>
        <div style={link} className="nav navbar-nav navbar-right">
          <Link to="/">Portfolio</Link> | <Link to="/images">Images</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
