import constants from './../constants';
const { defaultState, types } = constants;

const repos = (state = defaultState, action) => {
  let repos;
  let newRepos;
  let newState;
  switch (action.type) {
    case types.REQUEST_REPOS:
      newRepos = {
        isFetching: true,
        repoId: action.repoId
      };
      newState = Object.assign({}, state, {
        [action.repoId]: newRepos
      });
      return newState;
    case types.DISPLAY_REPOS:
      newRepos = Object.assign({}, {
        isFetching: false,
        name: action.name,
        description: action.description,
        cloneUrl: action.cloneUrl,
        repoId: action.repoId
      });
      newState = Object.assign({}, {
        ["repos"]: newRepos
      });
      return newState;
    default:
      return state;
  }
}

export default repos;
