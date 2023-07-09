import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilteredData,clear_filtered_data } from '../Redux/FilterJobSlice';
import Header from '../Components/Commons/Header';
import CarouselHome from '../Components/Cores/CoreHome/CarouselHome';
import { Vortex } from 'react-loader-spinner';
import Footer from '../Components/Commons/Footer';
const FilterJobContent = () => {
  const dispatch = useDispatch();
  
  const { filtered_data } = useSelector(state => state?.filter_job);
  const { id } = useParams();
   console.log('filtered data:',filtered_data);
  useEffect(() => {
    //Async Operation...
    dispatch(fetchFilteredData(id));

    return ()=>{//clean Up function...
        dispatch(clear_filtered_data());
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <CarouselHome />
      {
        (filtered_data?.length === 0) ? <>
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
            filtered_data?.map((item, index) => {
              return (<>
                <div className="detail width-100 " key={index + 1}>
                  <div className="media display-inline text-align-center" style={{ width: '70%', margin: '50px auto' }}>
                    <img src={item.jobIcon} alt='' className="mr-3 " />
                    <div className="media-body text-left  text-align-center" style={{ padding: '20px' }}>
                      <h6><Link to={`/jobDetail/${item?.id}`} className="font-color-black">{item?.jobTitle}</Link>
                      </h6>
                      <i className="large material-icons">account_balance</i>
                      <span className="text">{item?.companyName}</span>
                      <br />
                      <i className="large material-icons">place</i>
                      <span className="text font-size">{item?.location}</span>
                      <div className="float-right margin-top text-align-center">
                        <Link to={`/jobDetail/${item?.id}`} className="part-full-time btn btn-outline-warning" style={{ textDecoration: 'none' }}>Apply Here</Link>
                        <p className="date-time">{item?.jobDeadline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>)
            })
          }
        </>
      }
      <Footer/>
    </>
  )
}

export default FilterJobContent