import { SET_ROUTE } from "./types";

const initialState = {
  route: "",
};

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, route: action.payload };
  }
  return state;
};

export default routeReducer;
