import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosLocalInstance } from '../Api/apiUrl';
import Header from '../Components/Commons/Header';
import Footer from '../Components/Commons/Footer';
import Blog1 from '../Images/blog1.jpg'
import Blog2 from '../Images/blog2.jpg'
import Blog3 from '../Images/blog3.jpg'
import Blog4 from '../Images/blog4.jpg'
import Blog5 from '../Images/blog5.jpg'
import Blog6 from '../Images/blog6.jpg'

const BlogDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const getParticularBlog = async () => {
        try {
            const { data } = await axiosLocalInstance.get(`all_blog/${id}`);
            console.log('Data:',data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getParticularBlog();
    },[]);
    return (
        <>
            <Header />
            <div className="vertical-space-100"> </div>
            <div className="vertical-space-101"> </div>
            <div style={{width:'500px',margin:'auto'}}>
                <div className='container-fluid'>
                    <div className='row-content'>
                        <div className='col-sm-6'>
                            <div className="card" style={{ width: '30rem',height:'30rem',boxShadow:'20px 20px 40px' }}>
                                <img src={Blog1} className="card-img-top" alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">{data?.title}</h5>
                                    <p className="card-text">{data?.postText} Lorem Ipsum sento pauchilo sento</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="vertical-space-100"> </div>
            <div className="vertical-space-101"> </div>
            <Footer />
        </>
    )
}

export default BlogDetail