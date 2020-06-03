import * as actionTypes from "../actions/actionTypes";

const reducer = (state = { base: "", toppings: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_BASE:
      console.log(action.payload);
      return {
        ...state,
        base: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
