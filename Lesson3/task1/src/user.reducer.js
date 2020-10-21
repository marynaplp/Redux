import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
    usersList: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                usersList: state.usersList.concat(action.user),
            };

        case DELETE_USER:
            {
                const newList = state.usersList.filter((user) =>
                    user.id !== action.payload.userId)
                return {
                    ...state,
                    userList: newList,
                }
            }
        case UPDATE_USER:
            {
                const newList = state.usersList.map((user) => {

                    if (user.id === action.payload.userId) {
                        return {
                            ...user,
                            ...action.payload.userData,

                        }
                    }
                    return user;
                })
                return {
                    ...state,
                    userList: newList,
                };
            }



        default:
            return state;
    }
};

export default userReducer