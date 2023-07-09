import React from 'react'
import Header from '../Components/Commons/Header'
import CarouselHome from '../Components/Cores/CoreHome/CarouselHome'
import Footer from '../Components/Commons/Footer'
import { useSearch } from '../Contex/JobSearchProvider'
import { Link } from 'react-router-dom'
const SearchedContent = () => {
    const [search] = useSearch();
    return (
        <>
            <Header />
            <CarouselHome />
            <div className='container-fluid'>
                <div className='row-content'>
                    <div className='col-sm-12 text-center'>
                        {
                            (search?.results?.length === 0) ? <>
                                <h3 className='text-danger' style={{margin:'20px'}}>Sorry!!! Dude No Jobs Find Regarding Your Search!!!</h3>
                            </> : <>
                                <h4 style={{margin:'50px'}} className='text-warning'>Searched Results:</h4>
                                {   
                                    search?.results?.map((item, index) => {
                                        return (<>
                                            <div className="detail width-100 " key={index + 1}>
                                                <div className="media display-inline text-align-center" style={{width:'70%',margin:'50px auto'}}>
                                                    <img src={item?.jobIcon} alt="John Doe" className="mr-3 " />
                                                    <div className="media-body text-left  text-align-center" style={{ padding: '20px' }}>
                                                        <h6><Link to={`/jobDetail/${item?.id}`} className="font-color-black">{item?.jobTitle}</Link>
                                                        </h6>
                                                        <i className="large material-icons">account_balance</i>
                                                        <span className="text">{item?.companyName}</span>
                                                        <br />
                                                        <i className="large material-icons">place</i>
                                                        <span className="text font-size">{item?.location}</span>
                                                        <div className="float-right margin-top text-align-center">
                                                            <Link to={`/jobDetail/${item?.id}`} className="part-full-time btn btn-outline-warning" style={{ textDecoration: 'none'}}>Apply Here</Link>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchedContent