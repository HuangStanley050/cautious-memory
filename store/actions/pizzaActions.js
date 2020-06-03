import * as actionTypes from "./actionTypes";
export const makeBase = (base) => {
  return {
    type: actionTypes.ADD_BASE,
    payload: base,
  };
};

export const addIngredient = (topping) => {
  return {
    type: actionTypes.ADD_TOP,
    payload: topping,
  };
};
