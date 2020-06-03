import * as actionTypes from "./actionTypes";
export const makeBase = (base) => {
  return {
    type: actionTypes.ADD_BASE,
    payload: base,
  };
};
