import React from "react";
import Cv from "./../images/resume.png";

function Resume(){
  var resume = {
    width: 500,
    height: 600,
    display: "block",
    margin: "auto",
    boxShadow: "8px 8px 5px grey"
  }
  return (
    <div>
      <img style={resume} src={Cv}/>
    </div>
  );
}

export default Resume;
