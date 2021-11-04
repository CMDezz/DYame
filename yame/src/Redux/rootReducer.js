import { combineReducers } from 'redux';
import ShopReducer from './Shop/ShopReducer';

const rootReducer = combineReducers({
    shop: ShopReducer
})

export default rootReducer;