// ADD ITEM TO CART
const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
};

// DELETE CART ITEM
const deleteCartItem = (cart) => {
    return {
        type: 'DELETE_CART_ITEM',
        payload: cart
    }
};

export { addToCart, deleteCartItem };