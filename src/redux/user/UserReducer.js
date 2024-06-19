import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../Api";


const initialState = {
    user:[]
}
    

export const UserReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        signUp:(state,action)=>{
            
        }
    }
})

export const{signUp}=UserReducer.actions
export default UserReducer.reducer
