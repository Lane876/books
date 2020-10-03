import { GET_CHECK } from "./types";

const initialState = {
  check: false,
};

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECK:
      return { ...state, check: action.payload };
  }
  return state;
};

export default checkReducer;
