import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosLocalInstance } from "../Api/apiUrl";

const initialState = {
    loading: false,
    data: [],
    error: ''
};

export const postUserContact = async (userData) => {
    try {
        const { data } = await axiosLocalInstance.post('users', userData);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserContact=async id=>{
    try{
        const {data}=await axiosLocalInstance.delete(`users/${id}`);
        return data;
    }catch(error)
    {
        console.log(error);
    }
}

export const fetchUserContact=createAsyncThunk('user/contact',
async()=>{
    try{
        const {data}=await axiosLocalInstance.get('users');
        return data;
    }catch(error)
    {
        console.log(error);
    }
});


export const  ContactSlice=createSlice({
    name:'contact/user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUserContact.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchUserContact.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.data=payload;
        })
        .addCase(fetchUserContact.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});


