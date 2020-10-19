export const ADDUSER = "USERS/DELETEUSER"
export const addUser = (data) => {
    return {
        type: ADDUSER,
        user: data,
    }
}
export const deleteUse = (id) => {
    return {
        type: DELETEUSER,
        id,
    }
}