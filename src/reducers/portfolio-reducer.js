import constants from './../constants';
const { defaultState, types } = constants;

const portfolio = (state = defaultState, action) => {
  let portfolio;
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
      portfolio = [action.portfolioId];
      newPortfolio = Object.assign({}, portfolio, {
        isFetching: false,
        url: action.url,
        name: action.name,
        blog: action.blog,
        location: action.location,
        repos: action.repos,
        portfolioId: action.portfolioId
      });
      newState = Object.assign({}, {
        ["Portfolio"]: newPortfolio
      });
      return newState;
    default:
      return state;
  }
}

export default portfolio;
