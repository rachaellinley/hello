import { createStore, combineReducers, applyMiddleware} from 'redux';
import promise from "redux-promise-middleware";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
    authReducer,
    postsReducer,
})

export default createStore(rootReducer, applyMiddleware(promise));