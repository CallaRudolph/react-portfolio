import portfolio from './../../src/reducers/portfolio-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';

describe("Portfolio reducer", () => {
  const { defaultState, types } = constants;

  it("should return equivalent state if no action type is recognized", () => {
    expect(portfolio([], { type: null })).toEqual([]);
  });

  it("should update state on request portfolio", () => {
    const action = actions.requestPortfolio();
    const newObject = {
      isFetching: true,
      portfolioId: action.portfolioId
    };
    expect(portfolio(defaultState.portfolio, action)[action.portfolioId])
    .toEqual(newObject);
  });

  it("should update state on receive portfolio", () => {
    const action = actions.displayPortfolio("https://api/github.com", "Portfolio", "https://www.blog.com", "Buffalo, NY", "0", 0);
    const newObject = {
      isFetching: false,
      url: action.url,
      name: action.name,
      blog: action.blog,
      location: action.location,
      repos: action.repos,
      portfolioId: action.portfolioId
    };
    expect(portfolio(defaultState.portfolio, action)[action.portfolioId])
    .toEqual(newObject);
  });

});
