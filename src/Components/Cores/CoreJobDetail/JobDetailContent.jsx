import React, { useEffect } from 'react'
import JobDetail from '../../../Images/job-detail.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleJob, clearJobDetail } from '../../../Redux/JobDetailSlice'
import Comment1 from '../../../Images/comment1.png'
import Comment2 from '../../../Images/comment2.png'
import Comment3 from '../../../Images/comment3.png'
import { Link } from 'react-router-dom'

const JobDetailContent = ({ id }) => {
    const dispatch = useDispatch();
    const { particularJob } = useSelector(state => state?.job_detail);
    useEffect(() => {

        //Async Operation...
        dispatch(fetchSingleJob(id));

        //clean Up function...
        return () => {
            dispatch(clearJobDetail);
        }
    }, [dispatch]);
    return (
        <>
            <section id="job-Details" class>
                <div className="container background-color-full-white job-Details">
                    <div className="Exclusive-Product">
                        <h3>{particularJob?.jobTitle}</h3>
                        <Link to='/jobApplication' className="Apply-Now">Apply Now</Link>
                        <h6 className="font-color-orange">{particularJob?.companyName}</h6>
                        <a href="#!">View more similar jobs</a>
                        <i classname="material-icons">place</i>
                        <span classname="text">{particularJob?.location}</span>
                        <h4>Short description</h4>
                        <p>Porttitor amet condimentum non fringilla nostra scelerisque suscipit torquent sem tempor hac rutrum
                            posuere etiam, in risus a aenean nibh dapibus quis litora lobortis torquent ligula torquent commodo
                            pretium massa gravida senectus donec scelerisque cursus sit, sapien quam eros euismod volutpat
                            commodo convallis interdum, habitant leo himenaeos dictumst lorem taciti quisque.</p>
                    </div>
                    <img src={JobDetail} alt='' className="job-detail-img" />
                    <div className="Job-Description">
                        <h4>Job Description / Responsibility</h4>
                        <ul>
                            <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia
                                Nibh est auctor lacus nam lacinia aptent</li>
                            <li className="list-style">
                                Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                            <li className="list-style">
                                Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                phasellus eleifend, ad at scelerisque vulputate habitant tempor</li>
                            <li className="list-style">
                                Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin
                                conubia, et porta pellentesque donec mollisEt vestibulum ullamcorper curae tellus consectetur
                                erat pharetra et cubilia</li>
                            <li classname="list-style">
                                Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                            <li className="list-style">
                                Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                phasellus eleifend, ad at scelerisque vulputate habitant tempor</li>
                            <li className="list-style">
                                Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin
                                conubia</li>
                        </ul>
                        <div className="vertical-space-20">
                            <h4>Experience &amp; Requirement</h4>
                            <p className="margin-bottom">Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem
                                maecenas, faucibus erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos elit
                                etiam lobortis luctus tempor phasellus vitae aliquam aenean tincidunt suscipit rhoncus mauris,
                                lectus duis aenean fermentum aptent laoreet habitant suspendisse donec malesuada lectus quisque
                                primis tristique donec mattis, per euismod quisque urna proin ornare, convallis litora curae
                                dictumst.</p>
                            <ul>
                                <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia
                                    Nibh est auctor lacus nam lacinia aptent</li>
                                <li className="list-style">
                                    Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia Nibh est auctor
                                    lacus nam lacinia aptent</li>
                                <li className="list-style">
                                    Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                                <li className="list-style">
                                    Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                    phasellus eleifend, ad at scelerisque vulputate habitant temmollis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="comment" className="background-color-full-white-light">
                <div className="container">
                    <div className="max-width-80">
                        <h4>comment</h4>
                        <a href="#!" className="Share">Share</a>
                        <div className="media border p-3">
                            <img src={Comment1} alt="John Doe" className="mr-3 rounded-circle imagess" style={{ width: 60 }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 ">
                            <img src={Comment2} alt="John Doe" className="mr-3 rounded-circle imagess" style={{ width: 60 }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 padding-none border-none">
                            <img src={Comment3} alt="John Doe" className="mr-3 rounded-circle imagess" style={{ width: 60 }} />
                            <div className="media-body">
                                <form>
                                    <textarea placeholder="Type commeny" required defaultValue={""} />
                                    <button className="Post">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default JobDetailContent