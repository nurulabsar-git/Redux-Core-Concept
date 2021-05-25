import { createStore } from "redux";
import cartReducers from "../Reducer/CartReducer";

export const store = createStore(cartReducers);