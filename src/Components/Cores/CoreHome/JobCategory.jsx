import React from 'react'
import icon1 from '../../../Images/icone/service-icone-1.png'
import icon2 from '../../../Images/icone/service-icone-2.png'
import icon3 from '../../../Images/icone/service-icone-3.png'
import icon4 from '../../../Images/icone/service-icone-4.png'
import icon5 from '../../../Images/icone/service-icone-5.png'
import icon6 from '../../../Images/icone/service-icone-6.png'
import icon7 from '../../../Images/icone/service-icone-7.png'
import icon8 from '../../../Images/icone/service-icone-8.png'

const JobCategory = () => {
    return (
        <>
            <section id="Job-Category">
                <div className="container">
                    <h3 className="text-center">Choose Job Category</h3>
                    <div className="vertical-space-30" />
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"> </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon1} alt='' />
                                </div>
                                <h6>Education &amp; Training</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>36 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon2} alt='' />
                                </div>
                                <h6>Sales and Marketing</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>72 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon3} alt='' />
                                </div>
                                <h6>Computer Programing</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>42 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon4} alt='' />
                                </div>
                                <h6>Customer Support</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>18 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon5} alt='' />
                                </div>
                                <h6>Design &amp; Multimedia</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>48 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon6} alt='' />
                                </div>
                                <h6>Web Development</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>94 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50 margin-left-18">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src={icon7} alt='' />
                                </div>
                                <h6>Medical/Pharma</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>64 Job
                                    Posts</span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light ">
                                <div className="circle">
                                    <img src={icon8} alt='' />
                                </div>
                                <h6>Engineer/Architects</h6>
                                <a href="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>52 Job
                                    Posts</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default JobCategory