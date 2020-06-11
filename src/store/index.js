import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const middlewares = [thunk];

const enhancers = compose(
    applyMiddleware(...middlewares)
);

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
    
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    // undefined, // {}, // initial state
    enhancers
);
export const persistor = persistStore(store);