import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer.js";
import {
    cartReducer
} from "./cart.reducer.js";
import { languageReducer } from "./language.reducer.js"

const appReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    language: languageReducer,
})

const store = createStore(appReducer)
export default store