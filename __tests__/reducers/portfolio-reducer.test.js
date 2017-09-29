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

});
