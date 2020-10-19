import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ name: 'aaa', id: 777 }));
store.dispatch(addUser({ name: 'ggg', id: 111 }));
store.dispatch(deleteUser(111));

console.log(store.getState());