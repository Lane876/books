import { combineReducers } from "redux";
import activeReducer from "./activeReducer";
import addNewReducer from "./addNewReducer";
import addSubgerneReducer from "./addSubgerneReducer";
import checkReducer from "./checkReducer";
import flagReducer from "./flagReducer";
import routeReducer from "./routeReducer";
import subgenreReducer from "./subgenreReducer";

const rootReducer = combineReducers({
  active: activeReducer,
  subgenre: subgenreReducer,
  addnew: addNewReducer,
  route: routeReducer,
  check: checkReducer,
  flag: flagReducer,
  addsubgerne: addSubgerneReducer,
});

export default rootReducer;
