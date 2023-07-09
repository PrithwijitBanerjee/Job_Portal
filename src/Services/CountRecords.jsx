
//Custom Api...

import { axiosLocalInstance } from "../Api/apiUrl"

export const countJobPosts=async ()=>{
        try{
            const {data}=await axiosLocalInstance.get('job_post');
            return data?.length;
        }catch(error)
        {
            console.log(error);
        }
}

export const countJobApplicants=async ()=>{
    try{
        const {data}=await axiosLocalInstance.get('job-applicants');
        return data?.length;
    }catch(error)
    {
        console.log(error);
    }
}

export const countJobNatures=async ()=>{
    try{
        const {data}=await axiosLocalInstance.get('job-nature');
        return data?.length;
    }catch(error)
    {
        console.log(error);
    }
}

export const countGuestUsers=async ()=>{
    try{
        const {data}=await axiosLocalInstance.get('users');
        return data?.length;
    }catch(error)
    {
        console.log(error);
    }
}