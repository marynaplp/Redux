export const SET_LANGUAGE = "CARD/SET_LANGUAGE";
export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: {
            language
        }
    }
}