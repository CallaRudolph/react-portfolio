import React from "react";
import Bridge from "./../images/bridge.jpg";
import Daisy from "./../images/daisy.jpg";
import Fish from "./../images/fish.jpg";
import Get from "./../images/get.jpg";
import Ollie from "./../images/ollie.jpg";
import Fear from "./../images/fear.jpg";

function Images(){
  var h2 = {
    textAlign: "center"
  }
  var image = {
    margin: "5",
    order: "1",
    flexGrow: "1",
    wordBreak: "normal",
    minWidth: "200",
    maxWidth: "290",
    minHeight: "200",
    maxHeight: "290"
  }
  var flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: "30",
  }
  return (
    <div>
      <h2 style={h2}>Recent Life Interests:</h2>
      <div style={flexContainer}>
        <br/><br/>
        <img style={image} src={Get}/>
        <img style={image} src={Daisy}/>
        <img style={image} src={Ollie}/>
        <img style={image} src={Bridge}/>
        <img style={image} src={Fish}/>
        <img style={image} src={Fear}/>
      </div>
    </div>
  );
}

export default Images;
