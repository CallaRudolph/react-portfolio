import * as types from './../constants/ActionTypes';

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
