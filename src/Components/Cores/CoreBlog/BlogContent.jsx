import React, { useEffect, useState } from 'react'
import Blog1 from '../../../Images/blog1.jpg'
import Blog2 from '../../../Images/blog2.jpg'
import Blog3 from '../../../Images/blog3.jpg'
import Blog4 from '../../../Images/blog4.jpg'
import Blog5 from '../../../Images/blog5.jpg'
import Blog6 from '../../../Images/blog6.jpg'
import { Link } from 'react-router-dom'
import { axiosLocalInstance } from '../../../Api/apiUrl'
const BlogContent = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const res = await axiosLocalInstance.get('all_blog');
            setData(res?.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <><section id="Blog">
            <div className="vertical-space-100"> </div>
            <div className="vertical-space-101"> </div>
            <div className="container">
                <h3>Our Latest Blog Posts</h3>
                <div className="vertical-space-20" />
                <p>Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus nulla</p>
                <div className="vertical-space-50" />
                <div className="row">
                    {
                        data?.map((item, index) => {
                            return (<>
                                <div className="col-lg-4 col-md-6" key={index+1}>
                                    <img src={item?.image} className="blog-image" alt='' />
                                    <div className="blog-box">
                                        <a href="#!" className="font-color-black font-size">{item?.title}</a>
                                        <p className="float-left font-color-black width">
                                            <a href="#!" className="font-color-black font-size-14">{item?.date}</a> |
                                            <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                                        <p className="space10">{item?.postText}</p>
                                        <div className="vertical-space-20" />
                                        <Link to={`/blogDetails/${item?.id}`} className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </>)
                        })
                    }
                    {/* <div className="col-lg-4 col-md-6">
                        <img src={Blog2} className="blog-image" alt='' />
                        <div className="blog-box">
                            <a href="#!" className="font-color-black font-size">Retina ready graphics</a>
                            <p className="float-left font-color-black width">
                                <a href="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</a> |
                                <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                            <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                npion dmst dapib honcs fusce aliqm non dictmst . </p>
                            <div className="vertical-space-20" />
                            <Link to="/blogDetails/2" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src={Blog3} className="blog-image" alt='' />
                        <div className="blog-box">
                            <a href="#!" className="font-color-black font-size">Simple blog post</a>
                            <p className="float-left font-color-black width">
                                <a href="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</a> |
                                <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                            <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                npion dmst dapib honcs fusce aliqm non dictmst . </p>
                            <div className="vertical-space-20" />
                            <Link to="/blogDetails/3" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src={Blog4} className="blog-image" alt='' />
                        <div className="blog-box">
                            <a href="#!" className="font-color-black font-size">Cookie cotton candy</a>
                            <p className="float-left font-color-black width">
                                <a href="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</a> |
                                <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                            <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                npion dmst dapib honcs fusce aliqm non dictmst . </p>
                            <div className="vertical-space-20" />
                            <Link to="/blogDetails/4" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src={Blog5} className="blog-image" alt='' />
                        <div className="blog-box">
                            <a href="#!" className="font-color-black font-size">Award-winning design</a>
                            <p className="float-left font-color-black width">
                                <a href="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</a> |
                                <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                            <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                npion dmst dapib honcs fusce aliqm non dictmst . </p>
                            <div className="vertical-space-20" />
                            <Link to="/blogDetails/5" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src={Blog6} className="blog-image" alt='' />
                        <div className="blog-box">
                            <a href="#!" className="font-color-black font-size">Mobile friendly</a>
                            <p className="float-left font-color-black width">
                                <a href="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</a> |
                                <a href="#!" className="font-color-black font-size-14">11 min read</a></p>
                            <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                npion dmst dapib honcs fusce aliqm non dictmst . </p>
                            <div className="vertical-space-20" />
                            <Link to="/blogDetails/6" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right" /></Link>
                        </div>
                    </div> */}
                    <div className="vertical-space-25" />
                    <div className="job-list">
                    </div>
                </div>
            </div>
            <div className="vertical-space-60"> </div>
        </section>

        </>
    )
}

export default BlogContent