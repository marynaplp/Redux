export const ADDUSER = "USERS/ADD_USER";
export const DELETEUSER = "USERS/DELETE_USER";
export const UPDATE_USER = "USERS/UPDATE_USER"

export const addUser = (userData) => {
    return {
        type: ADD_USER,
        payload: {
            userData,
        }
    };
};

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: {
            userId
        }
    };
};
export const updateUser = (userId, userData) => {
    return {
        type: DELETE_USER,
        payload: {
            userId,
            userData
        }
    };
};