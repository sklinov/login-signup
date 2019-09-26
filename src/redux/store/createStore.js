import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers/RootReducer';
import { watchLogIn, watchSignUp } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function() {
    const store = createStore(
        RootReducer,
        compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );
     sagaMiddleware.run(watchLogIn);
     sagaMiddleware.run(watchSignUp);
    return store;
} 