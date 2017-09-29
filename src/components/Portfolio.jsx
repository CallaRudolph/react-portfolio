import React from 'react';
import Entry from './Entry';
import { connect } from 'react-redux';

const Portfolio = ({ dispatch, portfolio }) => {
  let formAreaContent;
  var avatar = {
    width: "150",
    height: "150",
    float: "right"
  }
  if (portfolio.portfolioId === 0) {
    formAreaContent =
      <div>
        <Entry/>
      </div>
  } else if (portfolio.calla.blog === "") {
    formAreaContent =
    <div className="well">
      <h1>{portfolio.calla.location}</h1>
    </div>
  } else {
    formAreaContent =
    <div className="well">
      <img style={avatar} src={portfolio.calla.image}/>
      <h2>{portfolio.calla.name}</h2>
      <h4><em>{portfolio.calla.location}</em></h4>
      <a href={portfolio.calla.url}>GitHub</a>
      <br/>
      <a href={portfolio.calla.blog}>LinkedIn</a>
      <h4>Projects: <em>{portfolio.calla.repos}</em></h4>
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
