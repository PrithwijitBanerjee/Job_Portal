import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { axiosLocalInstance } from '../Api/apiUrl';

const initialState={
    loading:false,
    error:'',
    job_nature_data:[]
};

//Custom Api...
export const deleteJobNature=async id=>{
    try{
        const res=await axiosLocalInstance.delete(`job-nature/${id}`);
        return res?.data;
    }catch(error)
    {
        console.log('Error while calling DeleteJobNature Api:',error?.message);
    }
}

//Thunk Middleware...

export const fetchJobNature=createAsyncThunk('user/jobNature',
async()=>{
    try{
        const {data}=await axiosLocalInstance.get('job-nature');
        return data;
    }catch(error)
    {
        console.log(error);
    }
});

//Store...

export const JobNatureSlice=createSlice({
    name:'jobNature/user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchJobNature.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchJobNature.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.job_nature_data=payload;
        })
        .addCase(fetchJobNature.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});