import { ADD_PRODUCT, REMOVE_PRODUCT } from "./card.actions";

const card = {
    productList: [],
};

export const cardReducer = (state = card, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state,
                    productList: state.productList.concat(action.payload.productData),
                };
            }

        case REMOVE_PRODUCT:
            {
                const newList = state.productList.filter(
                    (product) => product.id !== action.payload.productId
                );
                return {
                    ...state,
                    productList: newList,
                };
            }


        default:
            return state;
    }
};