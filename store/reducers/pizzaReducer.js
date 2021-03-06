import * as actionTypes from "../actions/actionTypes";

const reducer = (
  state = { base: "", toppings: [], showModal: false },
  action
) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        base: "",
        toppings: [],
      };
    case actionTypes.ADD_TOP:
      let newToppings;
      if (!state.toppings.includes(action.payload)) {
        console.log("adding new topping");
        newToppings = [...state.toppings, action.payload];
      } else {
        console.log("removing topping");
        newToppings = state.toppings.filter((item) => item !== action.payload);
      }

      return {
        ...state,
        toppings: newToppings,
      };
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
