import { combineReducers } from 'redux';
import products from './product;'
import order    from './order;'
import comments from './comments;'
import shops    from './shops;'


//合并领域
const rootReducer = combineReducers({
    order,
    products,
    shops,
    comments
})