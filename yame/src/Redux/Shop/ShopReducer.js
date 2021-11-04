import * as actionTypes from './ShopType';

const INITIAL_STATE = {
    products: [],//{ID,ITLE,PRICE,DES,IMG}
    cart: [],
    currentItem: null

}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const product = action.payload;
            const sizeInCart = state.cart.find(item => item._id === product._id && item.sizePicked === product.sizePicked ? true : false)

            return {
                ...state,
                cart: sizeInCart ? state.cart.map(item => item._id === product._id && item.sizePicked === product.sizePicked ? { ...item, qty: item.qty + product.qty } : item)
                    : [...state.cart, product]

            };

        case actionTypes.REMOVE_FROM_CART:

            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload.id || (item._id === action.payload.id && item.sizePicked !== action.payload.size))
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id && item.sizePicked === action.payload.size ? { ...item, qty: action.payload.qty } : item)
            }
        // return {
        //     ...state,
        //     cart: state.cart.find(item => item._id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
        // }
        case actionTypes.LOAD_CURRENT_ITEM:
            // console.log(action.payload)
            let Item = {
                ...action.payload.Item,
                AlbumId: action.payload.Id
            }
            // console.log(Item)
            state.currentItem = Item;
            return state
        case actionTypes.FETCH_ALL_PRODUCTS:
            const isInProducts = (searchItem) => {
                return state.products.find(item => item._id === searchItem._id)
            }

            action.payload.map(product => {
                let isIn = isInProducts(product)
                if (isIn === undefined) state.products.push(product)

            })
            return state
        default:
            return state

    }
}

export default shopReducer;