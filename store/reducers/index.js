import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pizzaReducer from "./pizzaReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  pizza: pizzaReducer,
});

export default rootReducer;
