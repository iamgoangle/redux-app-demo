import { createStore } from 'redux';

// import combine reducer
import reducers from './reducers/index';

// import action
import { addToCart } from './actions/cartActions';
import { postBook, deleteBook, updateBook } from './actions/bookActions';

// ==========================
// create store
// ==========================
const store = createStore(reducers);

// ==========================
// subscribe store
// ==========================
store.subscribe(() => {
    console.log('current state is: ', store.getState());
});

// ==========================
// create state and dispatch
// ==========================

// POST BOOK
store.dispatch(
    postBook(
        [{
            id: 1,
            title: 'The flash book.',
            description: 'This is the flash book description',
            price: 30.50
        }, 
        {
            id: 2,
            title: 'Marvel Agent of Shield',
            description: 'This is the marvel book description',
            price: 100.00
        },
        {
            id: 3,
            title: 'Hary Potter',
            description: 'This is a Harry Potter book description',
            price: 200.10
        }]
    )
);

// DELETE BOOK
store.dispatch(
    deleteBook({id: 1})
);

// UPDATE BOOK
store.dispatch(
    updateBook({
        id: 2,
        title: 'Ironman update!!'
    })
);

// --> cart actions
// add to cart
store.dispatch({
    type: 'ADD_TO_CART',
    payload: [{
        id: 1
    }]
});