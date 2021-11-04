import * as actionTypes from "./ShopType";

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product

    }
}
export const removeFromCart = (itemId, size) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
            size: size
        }
    }
}
export const adjustQty = (itemId, size, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            size: size,
            qty: value
        }
    }
}
export const loadCurrentItem = (Item, Id) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: { Item, Id }
    }
}
export const fetchAllProducts = (products) => {
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS,
        payload: products
    }
}