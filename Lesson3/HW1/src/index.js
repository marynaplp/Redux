import store from "./store";
import { setLanguage } from "./language.actions.js";
import { addProduct, removeProduct } from "./cart.actions.js"
import { setUser, removeUser } from "./user.actions.js"


store.subcribe(() => console.log(store.getState()))
store.dispatch(setLanguage("ua"));
store.dispatch(addProduct({
    id: "4",
    name: "milk"
}));
store.dispatch(setUser({
    name: "Marina "
}));