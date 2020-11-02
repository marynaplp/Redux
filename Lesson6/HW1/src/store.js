import { createStore, applyMiddleware, compose } from "redux";
import weatherReducer from "./weather/weather.reducer";
const reducer = combineReducers({
    users: weatherReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;