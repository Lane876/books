import { GET_SUBGERNE } from "./types";

const initialState = {
  addsubgerne: "",
};

const addSubgerneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBGERNE:
      return { ...state, addsubgerne: action.payload };

    default:
      return state;
  }
};

export default addSubgerneReducer;
