import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import {axiosLocalInstance} from '../Api/apiUrl'
const initialState={
    loading:false,
    error:'',
    particularJob:{}
};

//Thunk Middleware...
export const fetchSingleJob=createAsyncThunk('applicant/singleJob',
    async(id)=>{
        try{
            const {data}=await axiosLocalInstance.get('job_post');
            const res=data?.find(record=>record?.id===+id);
            return res;
        }catch(error)
        {
            console.log(error);
        }
    });

//Slice...

export const JobDetailSlice=createSlice({
    name:'jobDetail/applicant',
    initialState,
    reducers:{
        clearJobDetail:state=>{
            state.particularJob={};
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchSingleJob.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchSingleJob.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.particularJob=payload;
        })
        .addCase(fetchSingleJob.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});

export const {clearJobDetail}=JobDetailSlice.actions;
