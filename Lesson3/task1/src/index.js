import store from "./store";
import { increment, decrement } from "./counter.actions";
store.subcribe(() => console.log(store.getState()))
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());