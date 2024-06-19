import {configureStore } from '@reduxjs/toolkit'
import ItemReducer from '../items/ItemReducer'
import UserReducer from '../user/UserReducer'
export const store = configureStore({
    reducer:{
        items:ItemReducer,
        user:UserReducer,
    }
})