import * as actionTypes from './ProductActions';

export default (state, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_ADD:
            const productToAdd = state.items.filter((product) => product.id === action.payload)[0];
            productToAdd.qty++;


            return {
                ...state,
                total: state.total + productToAdd.price,
                productToAdd,
            }

        case actionTypes.PRODUCT_REM:
            const productToRem = state.items.filter((product) => product.id === action.payload)[0];
            if (productToRem.qty <= 0) return state;

            productToRem.qty--;

            return {
                ...state,
                total: state.total - productToRem.price,
                productToRem,
            }

        default:
            return state;
    }
}
