import { getUserData } from "./users.gateway";
<<<<<<< HEAD
export const SHOW_SPINNER = "SHOW_SPINNER";
export const USER_DATA_RECEIVED = "USER_DATA_RECEIVED";
=======

export const SHOW_SPINNER = "SHOW_SPINNER";
export const USER_DATA_RECEIVED = "USER_DATA_RECEIVED";

>>>>>>> f588e8a72c873690c5873d7248465ae809183a9f

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    };
};

export const userDataReceived = (userData) => {
    return {
        type: USER_DATA_RECEIVED,
        payload: {
            userData,
        },
    };
};

export const fetchUserData = (userName) => {
    return function(dispatch) {
        dispatch(showSpinner());
        getUserData(userName).then((userData) => {
            dispatch(userDataReceived(userData));
        });
    };
};
