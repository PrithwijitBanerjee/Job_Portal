import React from 'react'
import Man from '../../../Images/man.png'
const JobTendHome = () => {
    return (
        <><section id="Jobtend">
            <div className="container">
                <div className="vertical-space-85" />
                <div className="row">
                    <div className="col-lg-9 col-md-6  align-self-center">
                        <h3 className="title">Jobtend - Best Place to Find Jobs &amp; Employee</h3>
                        <div className="vertical-space-30" />
                        <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                            suspendisse pretium dictumst inceptos mattis euismod lorem nulla magna duis nostra sodales
                            luctus nulla
                        </p>
                        <div className="vertical-space-30" />
                        <h4>Why we are best</h4>
                        <div className="vertical-space-30" />
                        <ul>
                            <li className="list-item1 ">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et
                                cubilia
                                <br /> Nibh est auctor lacus nam lacinia aptent
                            </li>
                            <li className="list-item1 ">Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet
                                tempor arcu fames</li>
                            <li className="list-item1 ">Odio habitasse senectus morbi dapibus mauris non primis, nisl ante
                                hendrerit consectetur nulla phasellus eleifend, ad at scelerisque vulputate habitant tempor
                            </li>
                        </ul>
                        <div className="vertical-space-30" />
                        <a href="#!" className="Explore-Employee">Explore Employee</a>
                        <a href="#!" className="Explore-New-Jobs">Explore New Jobs</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img src={Man} alt='' className="man-img" />
                    </div>
                    <div className="vertical-space-60" />
                </div>
            </div>
        </section>


        </>
    )
}

export default JobTendHome