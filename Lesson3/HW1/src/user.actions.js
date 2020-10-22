export const SET_USER = "USERS/SET_USER";
export const REMOVE_USER = "USERS/REMOVE_USER";

export const setUser = (userData) => {
    return {
        type: SET_USER,
        payload: {
            userData,
        }
    };
};

export const removeUser = (userId) => {
    return {
        type: REMOVE_USER,
        payload: {
            userId
        }
    };
};