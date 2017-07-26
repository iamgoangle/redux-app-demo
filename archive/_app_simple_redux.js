import { createStore } from 'redux';

// ==========================
// define reducer
// ==========================
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        break;
    }

    return state;
};

// ==========================
// create store
// ==========================
const store = createStore(reducer);

// ==========================
// subscribe store
// ==========================
store.subscribe(() => {
    console.log('current state is: ' + store.getState());
});

// ==========================
// create state and dispatch
// ==========================
store.dispatch({
    type: 'INCREMENT',
    payload: 1
});

store.dispatch({
    type: 'INCREMENT',
    payload: 1
});

store.dispatch({
    type: 'INCREMENT',
    payload: 1
});