import { configureStore, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import {initReducer } from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    key: 'root',
    storage:AsyncStorage 
  }
const persistedReducer = persistReducer(persistConfig, initReducer)
export const store =createStore(persistedReducer);
export const persistor = persistStore(store)
configureStore({ reducer: initReducer })
 
