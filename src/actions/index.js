import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestPortfolio = (portfolioId) => ({
  type: types.REQUEST_PORTFOLIO,
  portfolioId: portfolioId
});

export const displayPortfolio = (url, name, blog, location, repos, portfolioId) => ({
  type: types.DISPLAY_PORTFOLIO,
  url,
  name,
  blog,
  location,
  repos,
  portfolioId
});

export function fetchPortfolio() {
  console.log("hello");
  return function (dispatch) {
    const portfolioId = v4();
  }
}
