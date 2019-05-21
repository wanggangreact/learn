import { createStore } from 'redux';
import rootReducer     from './modules';
import thunk           from 'react-thunk'

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLD_EXTESION) {
    console.log("dev-tools")
}
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;