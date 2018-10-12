import { combineReducers, applyMiddleware, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'
import applicationNavigationReducer from '../../navigator/navigatorReducer'


const reducer = combineReducers({
    nav: applicationNavigationReducer
}
)

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(reducer, applyMiddleware(sagaMiddleware))