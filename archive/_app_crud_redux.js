import { createStore } from 'redux';

// ==========================
// define reducer
// ==========================
let initState = {
    books: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            return {books: [...state.books, action.payload]};
        break;

        case 'DELETE_BOOK':
            let currentBook = [...state.books];
            let findBookIndex = currentBook.findIndex((book) => {
                return book.id === action.payload.id
            });
            
            // console.time('slice  =>');
            // let leftBooks = [...currentBook.slice(0, findBookIndex)];
            // let rightBooks = [...currentBook.slice(findBookIndex + 1)];
            // console.timeEnd('slice  =>');

            // // or we can use .filter()
            // console.time('filter =>');
            let books = currentBook.filter((book) => {
                return book.id !== action.payload.id;
            });
            // console.timeEnd('filter =>');

            // return {books: [...leftBooks, ...rightBooks]};
            return {books: [...books]};
        break;

        case 'UPDATE_BOOK':
            const currentBookToUpdate = [...state.books];
            
            const indexToUpdate = currentBookToUpdate.findIndex((book) => {
                return book.id === action.payload.id
            });

            // create new book state and same array index of item we want to replace
            let newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            
            // slice item before consider item and slice item next index of consider item
            return {
                books: 
                    [
                        ...currentBookToUpdate.slice(0, indexToUpdate), 
                        newBookToUpdate,
                        ...currentBookToUpdate.slice(indexToUpdate+1)
                    ]
                };
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
    console.log('current state is: ', store.getState());
});

// ==========================
// create state and dispatch
// ==========================

// C = Create
// dispatch first action
store.dispatch({
    type: 'POST_BOOK',
    payload: {
        id: 1,
        title: 'Book - 1',
        description: 'this is the book description'
    }
});

store.dispatch({
    type: 'POST_BOOK',
    payload: {
        id: 2,
        title: 'Book - 2',
        description: 'this is the book description'
    }
});

store.dispatch({
    type: 'POST_BOOK',
    payload: {
        id: 3,
        title: 'Book - 3',
        description: 'this is the book description'
    }
});

// D = Delete
// delete book id: 1
store.dispatch({
    type: 'DELETE_BOOK',
    payload: {
        id: 2
    }
});

// U = Update
// update a book title
store.dispatch({
    type: 'UPDATE_BOOK',
    payload : {
        id: 3,
        title: 'Learn React in 24h'
    }
});