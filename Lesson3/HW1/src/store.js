import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer.js";
import {
    cardReducer
} from "./card.reducer.js";
import { languageReducer } from "./language.reducer.js"

const appReducer = combineReducers({
    card: cardReducer,
    user: userReducer,
    language: languageReducer,
})

const store = createStore(appReducer)
export default store