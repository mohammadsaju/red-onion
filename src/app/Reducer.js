export const initialState = {
    foods:[],
    cart:[],
    user: {}
};

export const reducer = (state, action) => {
    
    if(action.type == 'ADD_TO_CART'){
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }
    }
    
    if(action.type == 'INCREMENT') {
        const updateCart = state.cart.map(item => {
            if(item.key === action.payload) {
                return{...item, quantity: item.quantity + 1}
            }
            return item;
        });
        return{...state, cart: updateCart}
    }

    if(action.type == 'DECREMENT') {
        const updateCart = state.cart.map(item => {
            if(item.key === action.payload) {
                return{...item, quantity: item.quantity - 1}
            }
            return item;
        }).filter(item => item.quantity !== 0);
        return{...state, cart: updateCart}
    }

    if(action.type == 'GET_TOTAL') {
        let totalQuantity = 0;
        let total = 0;
        for (const product of state.cart) {
            total = total + product.price * product.quantity;
            totalQuantity = totalQuantity + product.quantity;
        }

        const shipping = total > 0 ? 15 : 0;
        const tax = (total + shipping) * 0.10;
        const grandTotal = total + shipping + tax;
        return {...state, total, totalQuantity, shipping, tax, grandTotal}
    }

    if(action.type === 'SET_USER') {
        return {...state, user: action.payload}
    }

    switch(action.type) {
        case 'FETCH_SUCCESS': 
        return {
            ...state,
            foods: action.payload,
            displayFood: action.payload.filter(item => item.category == 'lounch')
        }
        default:
            return state;
    }
}

