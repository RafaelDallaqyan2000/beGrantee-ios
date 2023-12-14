import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  reducer: reducers,
});

export default createStore(rootReducer, applyMiddleware(...middleware));
