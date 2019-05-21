import entities from './entities';
import detail  from './detail';
import home    from './home';
import app     from './app';

const rootReducer = combineReducers({
    entities,
    detail,
    home,
    app
});