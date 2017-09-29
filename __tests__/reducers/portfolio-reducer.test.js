import portfolio from './../../src/reducers/portfolio-reducer';

describe("Portfolio reducer", () => {

  it("should return equivalent state if no action type is recognized", () => {
    expect(portfolio([], { type: null })).toEqual([]);
  });

});
