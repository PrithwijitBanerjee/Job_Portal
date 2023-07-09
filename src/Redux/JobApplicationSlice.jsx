import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosLocalInstance } from '../Api/apiUrl'
import axios from 'axios';
const initialState = {
    loading: false,
    job_application_data: [],
    error: ''
};


//Custom Api...
export const postJobApplication = async (userData) => {
    try {
        const res = await axios.post('http://127.0.0.1:3002/job-applicants', userData);
        return res?.data;
    } catch (error) {
        console.log('Error while posting data to PostJobApplication Api',error?.message);
    }
}

export const deleteJobApplication=async id=>{
    try{
        const {data}=await axiosLocalInstance.delete(`job-applicants/${id}`);
        return data;
    }catch(error)
    {
        console.log('Error while deleting record by deleteJobApplication Api',error?.message);
    }
}

export const fetchSingleJobApplication=async id=>{
    try{
        const {data}=await axiosLocalInstance.get(`job-applicants`);
        const res=data?.find(record=>record?.id===parseInt(id));
        return res;
    }catch(error)
    {
        console.log(error);
    }
}

export const editJobApplication=async(id,userData)=>{
    try{
        const {data}=await axiosLocalInstance.put(`job-applicants/${id}`,userData);
        return data;
    }catch(error)
    {
        console.log('Error while updating job Application by editJobApplication Api',error?.message);
    }
}

//Thunk Middleware...
export const fetchJobApplicationInfo=createAsyncThunk('applicant/fetchJobApplication',
    async()=>{
        try{
            const res=await axiosLocalInstance.get('job-applicants');
            return res?.data;
        }catch(error)
        {
            console.log(error);
        }
    });

//Slice...

export const JobApplicationSlice = createSlice({
    name: 'jobApplication/applicant',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchJobApplicationInfo.pending, state => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchJobApplicationInfo.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.job_application_data=payload;
        })
        .addCase(fetchJobApplicationInfo.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});