import React, { useReducer } from 'react';

import ProductContext from './ProductContext';
import ProductState from './ProductState';
import ProductReducer from './ProductReducer';

export default props => {

    const [state, dispatcher] = useReducer(ProductReducer, ProductState);

    return (
        <ProductContext.Provider value={[state, dispatcher]}>
            {props.children}
        </ProductContext.Provider>
    )
}
