// BOOK REDUCER
// CREATE NEW STATE OF BOOK

let initState = {
    books: []
};

const booksReducers = (state = initState, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            return {books: [...state.books, ...action.payload]};
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

export { booksReducers };