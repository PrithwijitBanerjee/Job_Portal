import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosLocalInstance } from '../../../Api/apiUrl';

const CoreJobSideBar = () => {
    const [desg, setDesig] = useState([]);
    const getDesg = async () => {
        try {
            const { data } = await axiosLocalInstance.get('job_post');
            setDesig(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getDesg();
    },[]);
    return (
        <>
            <div className="Job-Category-box">
                <p className="title">Job Category</p>
                <ul>
                    {
                        (desg?.length !== 0) && desg?.slice(5,10)?.map((item, index) => {
                            return (<>
                                <li key={index+1} className="list-item1 "><Link to={`/filterJobContent/${item?.id}`} className="font-color-black">{item?.jobCategory}</Link></li>
                            </>)
                        })
                    }
                    
                </ul>
            </div>
            <div className="Job-Nature-box">
                <p className="title">Job Nature</p>
                <ul>
                    <li className="list-item1 "><a href="#!" className="font-color-black">Full Time jobs</a></li>
                    <li className="list-item1 "><a href="#!" className="font-color-black">Part Time jobs</a></li>
                    <li className="list-item1 "><a href="#!" className="font-color-black">Hourly</a></li>
                </ul>
            </div>
        </>
    )
}

export default CoreJobSideBar