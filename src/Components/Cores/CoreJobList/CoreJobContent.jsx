import React, { useEffect, useState } from 'react'
import CoreJobSideBar from './CoreJobSideBar'
//import { fetchJobPosts } from '../../../Redux/JobPostSlice'
import { Vortex } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { axiosLocalInstance } from '../../../Api/apiUrl';
const CoreJobContent = () => {
    const [items,setItems]=useState([]);
    const [pageCount,setPageCount]=useState(0);
    const limit=4;
    const getInfo=async()=>{
        try{
            const {data}=await axiosLocalInstance.get('job_post');
            setPageCount(Math.ceil(data?.length/limit));
            setItems(data?.slice(0,limit));
        }catch(error)
        {
            console.log(error);
        }
    }
    useEffect(() => {
        
        getInfo();
    }, []);


    const handlePageChange=async data=>{
        const currentPage=data.selected+1;
        const lastIndex=currentPage*limit;
        const firstIndex=lastIndex-limit;
        
       const res=await axiosLocalInstance.get('job_post');
       setItems(res?.data?.slice(firstIndex,lastIndex));
       console.log('res of handle page change:',items);
    }
    return (
        <>
            <section id="resent-job-post" className="background-color-white-drak">
                <div className="vertical-space-85" />
                <div className="container text-center">
                    <h4 className="text-left">Filter Jobs Result</h4>
                    <div className="vertical-space-30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <CoreJobSideBar />
                        </div>
                        <div className="col-lg-8 col-md-12">
                            {
                                (items?.length === 0) ? <>
                                    <Vortex
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="vortex-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="vortex-wrapper"
                                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                    />
                                </> : <>
                                    {
                                        items?.map((item, index) => {
                                            return (<>
                                                <div className="detail width-100 " key={index?.id}>
                                                    <div className="media display-inline text-align-center">
                                                        <img src={item?.jobIcon} alt="John Doe" className="mr-3 " />
                                                        <div className="media-body text-left  text-align-center" style={{ padding: '20px' }}>
                                                            <h6><a href="#!" className="font-color-black">{item?.jobTitle}</a>
                                                            </h6>
                                                            <i className="large material-icons">account_balance</i>
                                                            <span className="text">{item?.companyName}</span>
                                                            <br />
                                                            <i className="large material-icons">place</i>
                                                            <span className="text font-size">{item?.location}</span>
                                                            <div className="float-right margin-top text-align-center">
                                                                <Link to={`/jobDetail/${item?.id}`} className="part-full-time" style={{ textDecoration: 'none' }}>Apply Here</Link>
                                                                <p className="date-time">{item?.jobDeadline}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        })
                                    }
                                    <ReactPaginate 
                                        nextLabel={'>>'}
                                        previousLabel={'<<'}
                                        breakLabel={'...'}
                                        pageCount={pageCount}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={2}
                                        onPageChange={handlePageChange}
                                        containerClassName='pagination justify-content-end margin-auto'
                                        pageClassName='page-item'
                                        pageLinkClassName='page-link'
                                        nextClassName='page-item'
                                        nextLinkClassName='page-link'
                                        previousClassName='page-item'
                                        previousLinkClassName='page-link'
                                        breakClassName='page-item'
                                        breakLinkClassName='page-link'
                                        activeClassName='active'
                                    />
                                </>
                            }
                            <div className="vertical-space-20" />
                            <div className="vertical-space-25" />
                            <div className="job-list width-100">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-space-60" />
            </section>
        </>
    )
}

export default CoreJobContent