import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobPosts } from '../../../Redux/JobPostSlice';
const FeaturedCompanyHome = () => {
    const dispatch = useDispatch();
    const { job_post_data } = useSelector(state => state?.job_posts);
    useEffect(() => {
        //Async Operation...
        dispatch(fetchJobPosts());
    }, [dispatch]);
    return (
        <>
            <section id="Featuread-Company">
                <div className="vertical-space-85" />
                <div className="container text-center">
                    <h3 className="text-center">Featuread Company</h3>
                    <div className="vertical-space-30" />
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="owl-carousel Featuread-Company-carousel">
                                {
                                    job_post_data?.map((item, index) => {
                                        return (<>
                                            <a href="#!" className="Featuread-Company-item" key={index + 1}>
                                                <div className="media text-align-center  media1">
                                                    <img src={item?.jobIcon} alt="John Doe" className=" Featuread-Company-img margin-auto" />
                                                    <div className="media-body text-left text-align-center ">
                                                        <h6>{item?.jobTitle}</h6>
                                                        <i className="material-icons">account_balance</i>
                                                        <span className="text">{item?.companyName}</span>
                                                        <br />
                                                        <i className=" material-icons">place</i>
                                                        <span className="text font-size">{item?.location}</span>
                                                        <br />
                                                        <i className=" material-icons">person</i>
                                                        <span className="text font-size font-color-orange">3 Open Position</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="vertical-space-85" />
                </div>
            </section>

        </>
    )
}

export default FeaturedCompanyHome