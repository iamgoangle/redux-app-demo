// ADD ITEM TO CART
const addToCart = (book) => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
};

// UPDATE CART
const updateCart = (_id, unit) => {
    return {
        type: 'UPDATE_CART',
        _id: _id,
        unit: unit
    }
};

// DELETE CART ITEM
const deleteCartItem = (cart) => {
    return {
        type: 'DELETE_CART_ITEM',
        payload: cart
    }
};

export { addToCart, deleteCartItem, updateCart };