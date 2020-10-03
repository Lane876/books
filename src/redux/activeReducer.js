import { SET_ACTIVE } from "./types";

const initialState = {
  active: "",
};

const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, active: action.payload };
  }
  return state;
};

export default activeReducer;
