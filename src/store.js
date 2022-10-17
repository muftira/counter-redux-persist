import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./redux/reducers/rootReducers"

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['counter']
  }
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const persistore = persistStore(store)

export {persistore, store}
