import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {axiosLocalInstance} from '../Api/apiUrl'
const initialState={
    loading:false,
    category_data:[],
    error:''
};

export const fetchAllCategoryJob=createAsyncThunk('user/category',
async()=>{
    try{
        const {data}=await axiosLocalInstance.get('job-nature');
        return data;
    }catch(error)
    {
        console.log(error);
    }
});

export const JobCategorySlice=createSlice({
    name:'categoryJob/user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchAllCategoryJob.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchAllCategoryJob.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.category_data=payload;
        })
        .addCase(fetchAllCategoryJob.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});