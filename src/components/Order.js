import React from "react"

class Order extends React.Component {

    render() {
        const { total, iva } = this.props;

        return (
            <div className="order-wrap">
                <div className="order-row">
                    <p className="subtotal">Subtotal:</p>
                    <p>{total}€</p>
                </div>
                <div className="order-row">
                    <p>VAT:</p>
                    <p>{iva}%</p>
                </div>
                <hr />
                <div className="order-row order-total">
                    <p>Total:</p>
                    <p>{total + (total * (iva / 100))}€</p>
                </div>
            </div>
        );
    }

}

export default Order;