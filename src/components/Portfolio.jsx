import React from 'react';
import Entry from './Entry';
import { connect } from 'react-redux';
import Blood from './../images/blood.jpg';

const Portfolio = ({ dispatch, portfolio }) => {
  let formAreaContent;
  var avatar = {
    width: "150",
    height: "150",
    float: "right",
    borderRadius: "10"
  }
  var content = {
    backgroundImage: "url(" + Blood + ")",
    textShadow: "1px 1px white",
    opacity: ".87",
    color: "#69585F"
  }
  if (portfolio.portfolioId === 0) {
    formAreaContent =
      <div>
        <Entry/>
      </div>
  } else if (portfolio.calla.blog === "") {
    formAreaContent =
    <div style={content} className="well">
      <h1>{portfolio.calla.location}</h1>
    </div>
  } else {
    formAreaContent =
    <div style={content} className="well">
      <img style={avatar} src={portfolio.calla.image}/>
      <h2>{portfolio.calla.name}</h2>
      <h3><em>{portfolio.calla.location}</em></h3>
      <h4>There's much more info on my <a href={portfolio.calla.url}>GitHub</a></h4>
      <h4>or you could peruse my <a href={portfolio.calla.blog}>LinkedIn</a></h4>
    <h4>Total projects I've created since May 2017:</h4> <h2><em>{portfolio.calla.repos}</em> !!</h2>
    </div>
  }
  return (
    <div>
      {formAreaContent}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  const portfolio = state;
  return {
    portfolio: portfolio
  };
};

export default connect(mapStateToProps)(Portfolio);
