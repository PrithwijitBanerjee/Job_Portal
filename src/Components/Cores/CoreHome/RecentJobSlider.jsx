import React from 'react'
import ClientTestimonial1 from '../../../Images/Clients-Testimonial1.jpg'
import ClientTestimonial2 from '../../../Images/Clients-Testimonial2.jpg'
import ClientTestimonial3 from '../../../Images/Clients-Testimonial3.jpg'
const RecentJobSlider = () => {
    return (
        <>
            <section id="Clients-Testimonial">
                <div className="vertical-space-85" />
                <div className="container">
                    <h3 className="text-center">Recent Job Post</h3>
                    <div className="vertical-space-30" />
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60" />
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="owl-carousel Clients-Testimonial-carousel">
                            <div className="Clients-Testimonial-item">
                                <div className="testimonial">
                                    <h3 className="testimonial-title">Farhana Islam</h3>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                        vehicula turpis non est imperdiet, et facilisis nisl tempus. Donec nec. </p>
                                    <div className="pic">
                                        <img src={ClientTestimonial1} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="Clients-Testimonial-item">
                                <div className="testimonial">
                                    <h3 className="testimonial-title">Williamson</h3>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                        vehicula turpis non est imperdiet, et facilisis nisl tempus. Donec nec. </p>
                                    <div className="pic">
                                        <img src={ClientTestimonial2} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="Clients-Testimonial-item">
                                <div className="testimonial">
                                    <h3 className="testimonial-title">Williamson</h3>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <i className="material-icons star">star</i>
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                        vehicula turpis non est imperdiet, et facilisis nisl tempus. Donec nec. </p>
                                    <div className="pic">
                                        <img src={ClientTestimonial3} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-space-85" />
                </div>
            </section>

        </>
    )
}

export default RecentJobSlider