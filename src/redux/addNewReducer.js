import { ADD_NEW } from "./types";

const initialState = {
  addnew: false,
};

const addNewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW:
      return { ...state, addnew: action.payload };
  }
  return state;
};

export default addNewReducer;
