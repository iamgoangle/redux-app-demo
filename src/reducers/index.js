// COMBINE REDUCER
import { combineReducers } from 'redux';

// PROJECT REDUCERS
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers
});