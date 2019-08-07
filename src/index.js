import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ProductProvider from './context/Product/ProductProvider';

import './index.css';

ReactDOM.render(
    <ProductProvider>
        <App />
    </ProductProvider>, document.getElementById('root')
);
