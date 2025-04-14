import { createSlice } from "@reduxjs/toolkit";

const initial=[];

const customerSlice=createSlice({
    name:"customer",
    initialState:initial,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload);
        },
        deleteCustomer(state,action){
            const delIndex=action.payload;
            return state.filter((val,index)=>(index!==delIndex))
        },
        editCustomer(state,action){
            const {index,editname}=action.payload;
            state[index]=editname;
        }
    }
})

export const {addCustomer , deleteCustomer,editCustomer}=customerSlice.actions;
export default customerSlice.reducer;