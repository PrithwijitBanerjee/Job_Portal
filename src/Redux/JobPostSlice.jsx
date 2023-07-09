import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import { axiosLocalInstance } from '../Api/apiUrl';


// creating initialState...

const initialState={
    loading:false,
    job_post_data:[],
    single_job_post_data:{},
    error:''
};

//Custom Api...
export const postJobApi=async userData=>{
    try{
        const res=await axiosLocalInstance.post('job_post',userData);
        return res?.data;
    }catch(error)
    {
        console.log('Error while posting job by PostJobApi',error?.message);
    }
}

export const deleteJobApi=async id=>{
    try{
        const {data}=await axiosLocalInstance.delete(`job_post/${id}`);
        return data;
    }catch(error)
    {
        console.log('Error while deleting Job by deleteJobApi',error?.message);
    }
}

export const editJobApi=async (id,userData)=>{
    try{
        const {data}=await axiosLocalInstance.put(`job_post/${id}`,userData);
        return data;
    }catch(error)
    {
        console.log('Error while updating Job Post by EditJobPost API',error?.message);
    }
}

export const fetchSingleJobApi=async(id)=>{
    try{
        const {data}=await axiosLocalInstance.get('job_post');
        const res=data?.find(record=>record?.id===parseInt(id));
        return res;
    }catch(error)
    {
        console.log(error);
    }
}

//Thunk Middleware...
export const fetchSingleJobPost=createAsyncThunk('admin/singleJobPost',
async(id)=>{
    try{
        const {data}=await axiosLocalInstance.get('job_post');
        const res=data?.find(record=>record?.id===parseInt(id));
        return res;
    }
    catch(error)
    {
        console.log(error);
    }
});

export const fetchJobPosts=createAsyncThunk('admin/jobPosts',
    async()=>{
        try{
            const res=await axiosLocalInstance.get('job_post');
            return res?.data;
        }catch(error)
        {
            console.log(error);
        }
    });

    
//Creating Slice...

export const JobPostSlice=createSlice({
    name:'jobPosts/admin',
    initialState,
    reducers:{
        clear_single_post:state=>{
                state.job_post_data={};
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchJobPosts.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchJobPosts.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.job_post_data=payload;
        })
        .addCase(fetchJobPosts.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
        .addCase(fetchSingleJobPost.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(fetchSingleJobPost.fulfilled,(state,{payload})=>{
            state.loading=false;
            state.error='';
            state.single_job_post_data=payload;
        })
        .addCase(fetchSingleJobPost.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});

export const {clear_single_post}=JobPostSlice.actions;


