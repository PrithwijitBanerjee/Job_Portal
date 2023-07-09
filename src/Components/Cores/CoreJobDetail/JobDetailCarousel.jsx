import React from 'react'
import Slider1 from '../../../Images/slider1.jpg'
const JobDetailCarousel = () => {
    return (
        <>
            <section id="intro">
                <div className="carousel-item active">
                    <div className="carousel-background"><img src={Slider1} alt='' /></div>
                    <div className="carousel-container">
                        <div className="carousel-content">
                            <h2 className="font-color-white">Job Result</h2>
                            <p className="font-color-white width-100"><a href="index.html" className="font-color-white">Home /</a><a href="Job_Category-2.html" className="font-color-white"> Job </a>/ Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default JobDetailCarousel