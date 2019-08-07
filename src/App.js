import React, { useContext } from 'react';

import ProductContext from './context/Product/ProductContext';

import ShopItem from "./components/ShopItem";
import Order from "./components/Order";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// http://gallery.wacom.com/gallery/66269259/Daily-UI-Challenge-058-Shopping-Cart

const App = () => {
	const [products] = useContext(ProductContext);
	const { total } = products;

	const showProducts = () => products.items.map((item, key) => <ShopItem key={`item.name-${key}`} img={`${window.location.origin}/img/${item.img}`} price={item.price} name={item.name} qty={item.qty} id={item.id} />);

	return (
		<div className="App">

			<nav className="navbar">
				<img alt="back menu" src="https://img.icons8.com/android/24/000000/back.png" />
				<h1>Shopping cart</h1>
				<img alt="burger menu" src="https://img.icons8.com/material-sharp/24/000000/menu.png" />
			</nav>

			<div className="shop-items-wrap">
				{showProducts()}
			</div>

			<Order total={total} iva={21} />
			<button className="checkout">Checkout</button>

		</div>
	);
}

export default App;