import {
  ADD_NEW,
  SET_ACTIVE,
  SET_SUBGENRE,
  SET_ROUTE,
  GET_CHECK,
} from "./types";

export const setGenreId = (active) => {
  return {
    type: SET_ACTIVE,
    payload: active,
  };
};
export const setSubgenre = (subgenre) => {
  return {
    type: SET_SUBGENRE,
    payload: subgenre,
  };
};
export const addNew = (data) => {
  return {
    type: ADD_NEW,
    payload: data,
  };
};
export const getRoute = (route) => {
  return {
    type: SET_ROUTE,
    payload: route,
  };
};
export const getCheck = (data) => {
  return {
    type: GET_CHECK,
    payload: data,
  };
};
