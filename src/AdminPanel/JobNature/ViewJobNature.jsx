import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobNature } from '../../Redux/JobNatureSlice';
import AdminSideBar from '../AdminSideBar';
const ViewJobNature = () => {
    const dispatch = useDispatch();
    const { loading, job_nature_data } = useSelector(state => state?.job_nature);
    useEffect(() => {
        //Async Operation...
        dispatch(fetchJobNature());
    }, [dispatch]);

    if (loading === true) {
        return (<>
            <div className='text-center' style={{ padding: '30px' }}>
                <h1 className='text-danger'>Loading...</h1>
            </div>
        </>)
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row-content'>
                    <AdminSideBar />
                    <div className='col-sm-9 text-center'>
                        <h1 style={{ color: 'blue', fontWeight: 'bolder', padding: '20px' }}>Job Nature Records</h1>
                        <hr />
                        <div className='container-fluid' style={{ marginTop: '50px', padding: '20px'}}>
                            <div className='row-content'>
                                <div className='col-sm-6'>
                                    <table class="table" style={{ width: '90%', margin: '20px auto',boxShadow:'20px 20px 80px' }}>
                                        <thead style={{ backgroundColor: "black", color: 'white', fontWeight: 'bold'}}>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Job Nature</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{backgroundColor:'lightgray'}}>
                                            {
                                                (job_nature_data?.length === 0) ? <>
                                                    <tr>
                                                        <th colSpan={3} className='text-center'><h1 className='text-danger'>Empty Record!!!!</h1></th>
                                                    </tr>
                                                </> : <>
                                                    {
                                                        job_nature_data?.map((item, index) => {
                                                            return (<>
                                                                <tr>
                                                                    <td>{item?.id}</td>
                                                                    <td>{item?.jobNature}</td>
                                                                </tr>
                                                            </>)
                                                        })
                                                    }
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                    <div className='text-center'>
                                        <button style={{  border: 'none', borderRadius: '15px', width: '40%' }} className='btn btn-primary  active'>Add Job Type</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewJobNature