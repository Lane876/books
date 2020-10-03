import { SET_SUBGENRE } from "./types";

const initialState = {
  subgenre: "",
};

const subgenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBGENRE:
      return { ...state, subgenre: action.payload };
  }
  return state;
};

export default subgenreReducer;
