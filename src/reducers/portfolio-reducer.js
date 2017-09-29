import constants from './../constants';
const { defaultState, types } = constants;

const portfolio = (state = defaultState, action) => {
  let newPortfolio;
  let newState;
  switch (action.type) {
    case types.REQUEST_PORTFOLIO:
      newPortfolio = {
        isFetching: true,
        portfolioId: action.portfolioId
      };
      newState = Object.assign({}, state, {
        [action.portfolioId]: newPortfolio
      });
      return newState;
    case types.DISPLAY_PORTFOLIO:
      newPortfolio = {

      };
      newState = [];
      return newState;
    default:
      return state;
  }
}

export default portfolio;
