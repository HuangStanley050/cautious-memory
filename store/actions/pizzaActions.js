import * as actionTypes from "./actionTypes";

export const showModal = () => ({
  type: actionTypes.SHOW_MODAL,
});
export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
});
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
