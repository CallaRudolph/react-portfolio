import React from 'react';
import Entry from './Entry';
import { connect } from 'react-redux';

const Portfolio = ({ dispatch, portfolio }) => {
  let formAreaContent;
  if (portfolio.portfolioId === 0) {
    formAreaContent =
      <div>
        <Entry/>
      </div>
  } else {
    formAreaContent =
    <div className="well">
      <img src={portfolio.calla.image}/>
      <h2>{portfolio.calla.name}</h2>
      <h4><em>{portfolio.calla.location}</em></h4>
      <a href={portfolio.calla.url}>GitHub</a>
      <br/>
      <a href={portfolio.calla.blog}>LinkedIn</a>
      <p>Projects: <em>{portfolio.calla.repos}</em></p>
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
