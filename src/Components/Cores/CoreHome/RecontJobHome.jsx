import React, { useEffect, useState } from 'react'
import { fetchJobPosts } from '../../../Redux/JobPostSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Vortex } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
const RecontJobHome = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(2);
    const { job_post_data } = useSelector(state => state?.job_posts);
    useEffect(() => {

        //Async Operation...
        dispatch(fetchJobPosts());
    }, [dispatch]);

    const handleLimit = e => {
        setLimit(limit + 2);
    }
    return (
        <>
            <section id="resent-job-post" className="background-color-white">
                <div className="vertical-space-85" />
                <div className="container text-center">
                    <h3 className="text-center">Recent Job Post</h3>
                    <div className="vertical-space-30" />
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60" />
                    {
                        (job_post_data?.length === 0) ? <>
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
                                (limit >= job_post_data?.length) ? <>
                                    {
                                        job_post_data?.slice(0, limit).map((item, index) => {
                                            return (<>
                                                <div className="detail">
                                                    <div className="media display-inline text-align-center">
                                                        <img src={item?.jobIcon} alt="John Doe" className="mr-3 " />
                                                        <div className="media-body text-left  text-align-center">
                                                            <h6>{item?.jobTitle}</h6>
                                                            <i className="large material-icons">account_balance</i>
                                                            <span className="text">{item?.companyName}</span>
                                                            <br />
                                                            <i className="large material-icons">place</i>
                                                            <span className="text font-size">{item?.location}</span>
                                                            <div className="float-right margin-top text-align-center">
                                                                <Link to={`/jobDetail/${item?.id}`} className="part-full-time" style={{ textDecoration: 'none' }}>{item?.jobNature}</Link>
                                                                <p className="date-time">{item?.jobDeadline}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        })
                                    }
                                    <div className='text-center'>
                                        <h1 className='text-danger '>You have reached at the end...</h1>
                                    </div>
                                </> : <>
                                    {
                                        job_post_data?.slice(0, limit).map((item, index) => {
                                            return (<>
                                                <div className="detail">
                                                    <div className="media display-inline text-align-center">
                                                        <img src={item?.jobIcon} alt="John Doe" className="mr-3 " />
                                                        <div className="media-body text-left  text-align-center">
                                                            <h6>{item?.jobTitle}</h6>
                                                            <i className="large material-icons">account_balance</i>
                                                            <span className="text">{item?.companyName}</span>
                                                            <br />
                                                            <i className="large material-icons">place</i>
                                                            <span className="text font-size">{item?.location}</span>
                                                            <div className="float-right margin-top text-align-center">
                                                                <Link to={`/jobDetail/${item?.id}`} className="part-full-time" style={{ textDecoration: 'none' }}>{item?.jobNature}</Link>
                                                                <p className="date-time">{item?.jobDeadline}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        })
                                    }
                                    <button className='btn btn-outline-danger' onClick={handleLimit}>Load More</button>
                                </>
                            }
                        </>
                    }
                    <div className="vertical-space-20" />
                    {/* <div className="job-list">
                        <a href="#!" className="Open-Jobs-Page margin-auto" style={{textDecoration:'none'}}>Open Jobs Page<i className="large material-icons float-right">trending_flat</i></a>
                    </div> */}
                </div>
                <div className="vertical-space-60" />
            </section>

        </>
    )
}

export default RecontJobHome