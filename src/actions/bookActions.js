// POST BOOK PAYLOAD
const postBook = (book) => {
    return {
        type: 'POST_BOOK',
        payload: book
    };
};

// DELETE BOOK PAYLOAD
const deleteBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
};

// UPDATE BOOK PAYLOAD
const updateBook = (book) => {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
};

// GET A BOOK
const getBooks = () => {
    return {
        type: 'GET_BOOK'
    }
};

export { postBook, deleteBook, updateBook, getBooks };