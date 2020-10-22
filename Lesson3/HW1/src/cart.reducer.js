import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const cart = {
    productList: [],
};

export const cartReducer = (state = cart, action) => {
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