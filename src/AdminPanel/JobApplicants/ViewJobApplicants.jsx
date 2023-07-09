import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobApplicationInfo, deleteJobApplication } from '../../Redux/JobApplicationSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import AdminSideBar from '../AdminSideBar';
const ViewJobApplicants = () => {
    const dispatch = useDispatch();
    const { loading, job_application_data } = useSelector(state => state?.job_application);

    useEffect(() => {
        //Async Operation...
        dispatch(fetchJobApplicationInfo());
    }, [dispatch]);

    const handleDelete = async id => {
        //Api call starts...
        const res = await deleteJobApplication(id);
        toast.error(`Record of id ${id} has been removed successfully!!!`, {
            theme: 'colored'
        });
        //Api call ends...
        dispatch(fetchJobApplicationInfo());//Refreshing table...
        return res;
    }
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
                        <h1 style={{ color: 'blue', fontWeight: 'bolder', padding: '20px' }}>Job Applicant's Records</h1>
                        <hr />
                        <div className='container-fluid' style={{ marginTop: '50px', padding: '20px' }}>
                            <div className='row-content'>
                                <div className='col-sm-6'>
                                    <table class="table" style={{ margin: ' auto', width: '90%',boxShadow:'20px 20px 70px'}}>
                                        <thead style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col">Address</th>
                                                <th scope='col'>CV</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Experience</th>
                                                <th scope="col">Highest Qualification</th>
                                                <th scope="col">Job Location</th>
                                                <th scope="col">Name</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{backgroundColor:'lightgray'}}>
                                            {
                                                (job_application_data?.length === 0) ? <>
                                                    <tr>
                                                        <th colSpan={14} className='text-center'><h1 className='text-danger'>Empty Record!!!!</h1></th>
                                                    </tr>
                                                </> : <>
                                                    {
                                                        job_application_data?.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{item?.id}</td>
                                                                        <td>{item?.address}</td>
                                                                        <td>{item?.cv}</td>
                                                                        <td>{item?.email}</td>
                                                                        <td>{item?.experience}</td>
                                                                        <td>{item?.highestQuality}</td>
                                                                        <td>{item?.jobLocation}</td>
                                                                        <td>{item?.name}</td>
                                                                        <td><Link className='btn btn-success' to={`/editJobApplication/${item?.id}`}>Edit</Link></td>
                                                                        <td><button className='btn btn-danger' onClick={handleDelete.bind(this, item?.id)}>Delete</button></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </>)
                                                        })
                                                    }
                                                </>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewJobApplicants