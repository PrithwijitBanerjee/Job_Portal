import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchAllCategoryJob } from '../../../Redux/JobCategorySlice';
import { useSearch } from '../../../Contex/JobSearchProvider';
import { axiosLocalInstance } from '../../../Api/apiUrl';
import { useNavigate } from 'react-router-dom';
const SearchHome = () => {
    const navigate=useNavigate();
    const [search,setSearch]=useSearch();//custom hooks built in JobSearchProvider.jsx file
    const dispatch=useDispatch();
    const {category_data}=useSelector(state=>state?.job_category);

    useEffect(()=>{
        dispatch(fetchAllCategoryJob());
    },[dispatch]);

    const handleOnchange=e=>{
        setSearch({...search,keywords:e.target.value});
    }
    const handleSearch=async e=>{
        e.preventDefault();
        try{
                const {data}=await axiosLocalInstance.get('job_post');
                const res=data.filter(record=>record?.jobCategory===search?.keywords);
                setSearch({...search,results:res});
                navigate('/searchedContent');
        }catch(error)
        {
            console.log(error);
        }
    }
    return (
        <>
            <div id="search-box">
                <div className="container search-box" style={{padding:'10px'}}>
                    <form action="#" id="search-box_search_form_3" className="search-box_search_form d-flex flex-lg-row flex-column align-items-right justify-content-between">
                        <div className="d-flex flex-row align-items-center justify-content-start inline-block">
                            <span className="large material-icons search">search</span>
                            <input className="search-box_search_input" placeholder="Search Keyword" required="required" type="search" style={{width:'600px'}} name='search' onChange={handleOnchange}/>
                            <select className="dropdown_item_select search-box_search_input" style={{width:'700px'}}>
                                <option>Job Nature</option>
                               {
                                    category_data?.map((item,index)=>{
                                        return (<>
                                                <option key={index+1} value={item?.jobNature}>{item?.jobNature}</option>
                                        </>)
                                    })
                               }
                            </select>
                            
                                <button type="submit" className="search-box_search_button" style={{height:'65px',width:'190px',marginTop:'20px',marginBottom:'20px',padding:'10px'}} onClick={handleSearch}>Search Jobs</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SearchHome