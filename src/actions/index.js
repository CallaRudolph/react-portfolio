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
  return function (dispatch) {
    const portfolioId = v4();
    dispatch(requestPortfolio(portfolioId));
    return fetch("https://api.github.com/users/CallaRudolph")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    ).then(function(json) {
      console.log(json);
      if (json.id > 1) {
        const url = json.html_url;
        const name = json.name;
        const blog = json.blog;
        const location = json.location;
        const repos = json.public_repos;
        dispatch(displayPortfolio(url, name, blog, location, repos, portfolioId));
      } else {
        console.log("error");
      }
    });
  };
}
