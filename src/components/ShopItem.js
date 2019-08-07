import React, { useContext } from "react"

import ProductContext from '../context/Product/ProductContext';
import * as actionTypes from '../context/Product/ProductActions';

export default props => {
    const { name, price, qty, id, img } = props;
    const [, dispatch] = useContext(ProductContext)

    return (
        <div className="shop-item">

            <div className="shop-item-img">
                <img src={img} alt={name} />
            </div>

            <div className="shop-item-desc">
                <div className="shop-item-name">
                    <h4>{name}</h4>
                </div>
                <div className="shop-item-qty">
                    <p>Quantity: {qty}</p>
                </div>
            </div>

            <div className="shop-item-actions">
                <div className="shop-item-action">
                    <button onClick={() => dispatch({ type: actionTypes.PRODUCT_ADD, payload: id })}>+</button>
                    <button onClick={() => dispatch({ type: actionTypes.PRODUCT_REM, payload: id })}>-</button>
                </div>
                <div className="shop-item-price">
                    <p>{price}€</p>
                </div>
            </div>

        </div>
    );
}
