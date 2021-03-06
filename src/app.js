// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // provider wrap component and pass store as a props

// REDUX
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

// import combine reducer
import reducers from './reducers/index';

// import action
import { addToCart } from './actions/cartActions';
import { postBook, deleteBook, updateBook } from './actions/bookActions';

// JQUERY
import $ from 'jquery';
window.$ = $;
window.jQuery = jQuery;

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// ==========================
// create store
// ==========================
const logger = createLogger();
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// ==========================
// component
// ==========================
import BooksList from './components/pages/BooksList';

const appElement = document.getElementById('app');
render(
    <Provider store={store}>
        <BooksList />
    </Provider>, appElement    
);

// ==========================
// create state and dispatch
// ==========================

// POST BOOK
// store.dispatch(
//     postBook(
//         [{
//             id: 1,
//             title: 'The flash book.',
//             description: 'This is the flash book description',
//             price: 30.50
//         }, 
//         {
//             id: 2,
//             title: 'Marvel Agent of Shield',
//             description: 'This is the marvel book description',
//             price: 100.00
//         },
//         {
//             id: 3,
//             title: 'Hary Potter',
//             description: 'This is a Harry Potter book description',
//             price: 200.10
//         }]
//     )
// );

// --> cart actions
// add to cart
// store.dispatch({
//     type: 'ADD_TO_CART',
//     payload: [{
//         id: 1
//     }]
// });