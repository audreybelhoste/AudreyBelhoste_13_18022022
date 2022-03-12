import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { initialState, userReducer } from './userReducer'
 
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = createStore(persistedReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);