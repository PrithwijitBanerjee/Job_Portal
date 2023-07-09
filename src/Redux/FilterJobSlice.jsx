import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosLocalInstance } from "../Api/apiUrl";

const initialState = {
    loading: false,
    error: '',
    filtered_data: []
}

export const fetchFilteredData = createAsyncThunk('user/filteredContent',
    async (id) => {
        try {
            const { data } = await axiosLocalInstance.get('job_post');
            const res = data?.find(record => record?.id === parseInt(id));
            const filterdResult = data?.filter(record => record?.jobCategory === res?.jobCategory);
            return filterdResult;
        } catch (error) {
            console.log(error);
        }
    });

export const FilterJobSlice=createSlice({
    name:'filteredContent/user',
    initialState,
    reducers:{
        clear_filtered_data:state=>{
            state.filtered_data=[];
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchFilteredData.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchFilteredData.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.filtered_data=payload;
        })
        .addCase(fetchFilteredData.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});  

export const {clear_filtered_data}=FilterJobSlice.actions;