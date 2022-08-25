const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return { ...state, products: action.payload }

        case "ADD_TO_CART":
            return { ...state, cart: [{ ...action.payload }, ...state.cart] }

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload) }
        case "CHANGE_QUANTITY":
            return { ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.qnty = action.payload.qnty : c.qnty) }
    }
}

export default reducer 