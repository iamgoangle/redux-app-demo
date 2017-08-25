// CART REDUCER
// CREATE NEW STATE OF CART

let initState = {
    cart: []
};

const cartReducers = (state = initState, action) => {
    switch (action.type) {
    case 'ADD_TO_CART':
        return { 
            ...state,
            cart: action.payload,
            totalAmount: totals(action.payload).amount,
            totalQty: totals(action.payload).qty
        };
        break;

    case 'UPDATE_CART':
        const currentBookToUpdate = [...state.cart];
        const indexToUpdate = currentBookToUpdate.findIndex((book) => {
            return book.id === action._id;
        });

        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
        };

        let cartUpdate = [
            ...currentBookToUpdate.slice(0, indexToUpdate), 
            newBookToUpdate,
            ...currentBookToUpdate.slice(indexToUpdate + 1)];

        return {
            ...state, 
            cart: cartUpdate,
            totalAmount: totals(cartUpdate).amount,
            totalQty: totals(cartUpdate).qty
        };

        break;

    case 'DELETE_CART_ITEM':
        return {
            ...state, 
            cart: action.payload,
            totalAmount: totals(action.payload).amount,
            totalQty: totals(action.payload).qty
        };
        break;
    }

    return state;
};

// CALCULATE TOTAL
const totals = (payloadArr) => {
    const totalAmount = payloadArr.map((cartArr) => {
        return cartArr.price * cartArr.quantity;
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    const totalQty = payloadArr.map((qty) => {
        return  qty.quantity;
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    return { amount: totalAmount.toFixed(2), qty: totalQty };
}

export { cartReducers, totals };