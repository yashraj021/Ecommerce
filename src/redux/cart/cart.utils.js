export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const cartExistingItem = cartItems.find(
        cartItem => cartItem.id === cartItemtoAdd.id
    );

    if( cartExistingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemtoAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem            
        )
    }

    return [...cartItems, {...cartItemtoAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const cartExistingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(cartExistingItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    );


};