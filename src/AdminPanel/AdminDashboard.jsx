import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSideBar from './AdminSideBar'
import { countJobApplicants, countJobNatures, countJobPosts, countGuestUsers } from '../Services/CountRecords'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [jobPost, setJobPost] = useState(0);
    const [jobNature, setJobNature] = useState(0);
    const [jobApplicant, setJobApplicant] = useState(0);
    const [users, setUsers] = useState(0);
    const name = localStorage.getItem('adminName');
    const handleClose = () => setShow(false);
    //custom hooks...
    const getCounts1 = async () => {
        const res1 = await countJobPosts();
        setJobPost(res1);
    }
    const getCounts2 = async () => {
        const res2 = await countJobApplicants();
        setJobApplicant(res2);
    }
    const getCounts3 = async () => {
        const res3 = await countJobNatures();
        setJobNature(res3);
    }
    const getCount4 = async () => {
        const res4 = await countGuestUsers();
        setUsers(res4);
    }
    useEffect(() => {
        getCounts1();
        getCounts2();
        getCounts3();
        getCount4();
        setTimeout(()=>{
                setShow(true);
        },6000);
    }, []);
    return (
        <>
            {/* Admin SideBar... */}
            <div className="container-fluid">
                <div className="row content">
                    <AdminSideBar />
                    <div className="col-sm-9">
                        <h1 style={{ color: 'blue', fontWeight: 'bolder', padding: '20px' }}>Welcome {name}</h1>
                        <hr />
                        <div className='container-fluid' style={{ marginTop: '50px', padding: '20px' }}>
                            <div className='row-content'>
                                <div className='col-sm-6'>

                                    <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '30px 30px 50px', borderRadius: '15px', padding: '15px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">Users</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to='/users' className="btn btn-outline-danger">View {users} Users</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>

                                    <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '30px 30px 50px', borderRadius: '15px', padding: '15px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">Job Posts</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link className="btn btn-outline-danger" to='/viewJobPost'>View {jobPost} Job Posts</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>

                                    <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '30px 30px 50px', borderRadius: '15px', padding: '15px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">Job Applicants</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to='/viewJobApplicants' className="btn btn-outline-danger">View {jobApplicant} Job Applicants</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6'>

                                    <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '30px 30px 50px', borderRadius: '15px', padding: '15px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">Job Nature</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to='/viewJobNature' className="btn btn-outline-danger">View {jobNature} Job Nature</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome  to Admin Dashboard</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank You For Login As An Admin</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminDashboard