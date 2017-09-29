import { combineReducers } from "redux";
import portfolio from "./portfolio-reducer";
import repos from "./repo-reducer";

const rootReducer = combineReducers({
  portfolio,
  repos
});

export default rootReducer;
