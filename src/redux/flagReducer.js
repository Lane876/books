import { GET_FLAG } from "./types";

const initialState = {
  flag: false,
};

const flagReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLAG:
      return { ...state, flag: action.payload };
    default:
      return state;
  }
};

export default flagReducer;
