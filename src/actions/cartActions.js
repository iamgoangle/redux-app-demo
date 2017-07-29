// add t ocart
const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
};

export { addToCart };