import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestPortfolio = (portfolioId) => ({
  type: types.REQUEST_PORTFOLIO,
  portfolioId: portfolioId
});

export const displayPortfolio = (image, url, name, blog, location, repos, portfolioId) => ({
  type: types.DISPLAY_PORTFOLIO,
  image,
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
      if (json.id > 1) {
        const image = json.avatar_url;
        const url = json.html_url;
        const name = json.name;
        const blog = json.blog;
        const location = json.location;
        const repos = json.public_repos;
        dispatch(displayPortfolio(image, url, name, blog, location, repos, portfolioId));
      } else {
        dispatch(displayPortfolio("", "", "Error, apologies", "", "Error, apologies", "", portfolioId))
      }
    });
  };
}

export const requestRepos = () => ({
  type: types.REQUEST_REPOS
});

export function fetchRepos() {
  const name = [];
  const description = [];
  const cloneUrl = [];
  return function (dispatch) {
    dispatch(requestRepos());
    return fetch("https://api.github.com/users/CallaRudolph/starred")
    .then(
      response => response.json(),
      error => console.log("A repo error occurred", error)
    ).then(function(json) {
      if (json.length > 1) {
        console.log(json);
        for (var i = 0; i < json.length; i++) {
          if (json[i].owner.login === "CallaRudolph") {
            name.push(json[i].name);
            description.push(json[i].description);
            cloneUrl.push(json[i].clone_url);
          }
        }
        console.log(name);
        console.log(description);
        console.log(cloneUrl);
      }
    });
  };
}
