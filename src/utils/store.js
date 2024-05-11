import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./Reducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const appStore=configureStore({
    reducer: persistedReducer,
})

export default appStore;