import React from 'react';
import Entry from './Entry';
import { connect } from 'react-redux';

const Portfolio = ({ dispatch, portfolio }) => {
  return (
    <div>
      <Entry/>
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
