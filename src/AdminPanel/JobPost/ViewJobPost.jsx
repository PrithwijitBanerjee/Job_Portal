import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobPosts, deleteJobApi } from '../../Redux/JobPostSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import AdminSideBar from '../AdminSideBar';
const ViewJobPost = () => {
    const dispatch = useDispatch();
    const { job_post_data, loading } = useSelector(state => state?.job_posts);

    useEffect(() => {
        //Async Operation...
        dispatch(fetchJobPosts());
    }, [dispatch]);

    const handleDelete = async id => {
        //Api call starts...
        const res = await deleteJobApi(id);
        toast.error(`Record of id: ${id} has been removed!!!`, {
            theme: 'colored'
        });
        //Api call ends...
        dispatch(fetchJobPosts());
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
                        <h1 style={{ color: 'blue', fontWeight: 'bolder', padding: '20px'}}>Job Post Record</h1> 
                        <hr />
                        <div className='container-fluid' style={{ marginTop: '50px', padding: '20px' }}>
                            <div className='row-content'>
                                <div className='col-sm-6'>
                                    <table className="table" style={{ width: '70%', margin: 'auto', marginTop: '20px',boxShadow:'20px 20px 70px'}}>
                                        <thead style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Job Title</th>
                                                <th scope="col">Job Icon</th>
                                                <th scope="col">Company Name</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Job Nature</th>
                                                <th scope="col">Job Deadline</th>
                                                <th scope="col">Job Category</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody style={{backgroundColor:'lightgray'}}>
                                            {
                                                (job_post_data?.length === 0) ? <>
                                                    <tr>
                                                        <th colSpan={10} className='text-center'><h1 className='text-danger'>Empty Record!!!!</h1></th>
                                                    </tr>
                                                </> : <>
                                                    {
                                                        job_post_data?.map((item, index) => {
                                                            return (<>
                                                                <tr>
                                                                    <td>{item?.id}</td>
                                                                    <td>{item?.jobTitle}</td>
                                                                    <td>{item?.jobIcon}</td>
                                                                    <td>{item?.companyName}</td>
                                                                    <td>{item?.location}</td>
                                                                    <td>{item?.jobNature}</td>
                                                                    <td>{item?.jobDeadline}</td>
                                                                    <td>{item?.jobCategory}</td>
                                                                    <td><Link className='btn btn-success' to={`/editJobPost/${item?.id}`}>Edit</Link></td>
                                                                    <td><button className='btn btn-danger' onClick={handleDelete.bind(this, item?.id)}>Delete</button></td>

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

export default ViewJobPost