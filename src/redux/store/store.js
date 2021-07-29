import {createStore,applyMiddleware,compose} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from '../reducer/reducer'
import postSaga from '../store/MoviesSaga'

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(rootReducer,withDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(postSaga)

export default store;