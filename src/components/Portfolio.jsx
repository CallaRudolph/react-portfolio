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
    <div>
      <p>yay</p>
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
