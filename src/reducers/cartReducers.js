// CART REDUCER
// CREATE NEW STATE OF CART

let initState = {
    cart: []
};

const cartReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [...state.cart, ...action.payload]
            }
        break;
    }

    return state;
};

export { cartReducers };