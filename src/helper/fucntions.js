// to sumerize the title
const shorten = title => {
    const splitedTitle = title.split(" ")
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    
    return newTitle
}

// to check that if the selected item already exists in cart or not
const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id)

    return result
}

// to count the quantity of a selected item
const quantityCounter = (state , id) => {
    let index = state.selectedItems.findIndex(item => item.id === id)

    if(index === -1){
        return false
    }else{
        return state.selectedItems[index].quantity
    }
}

// to calculate the items count and the total price of each item in cart
const sumItems = items => {
    const itemsCounter = items.reduce((total , item) => total + item.quantity , 0)
    const total = items.reduce((price, item) => price + item.quantity * item.price , 0).toFixed(2)

    return { itemsCounter , total }
}

// to set cart info in to the local storage
const setCartToLocalStorage = (cartState) => {
    localStorage.setItem("cart" , JSON.stringify(cartState))

    return cartState
}

// to get the cart info from local storage
const getCartFromLocalStorage = () => {
    const cart = (localStorage.getItem("cart"))

    if(cart){
        return {
            ...JSON.parse(cart)
        }        
    }else{
        return {
            selectedItems : [],
            itemsCounter : 0,
            total: 0,
            checkout: false
        }
    }
}

export { shorten , isInCart , quantityCounter , sumItems }
export { setCartToLocalStorage , getCartFromLocalStorage }