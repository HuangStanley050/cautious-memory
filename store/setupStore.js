import { createStore, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";
import rootReducer from "./reducers";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    //if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const makeStore = ({ pizza, auth }) => {
  return createStore(reducer, composeWithDevTools());
};

export const wrapper = createWrapper(makeStore, { debug: true });
