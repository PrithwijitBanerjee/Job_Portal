import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/AuthSlice'
import { useDispatch } from 'react-redux'
const AdminSideBar = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleAdminLogout=()=>{
        const adminName=localStorage.getItem('adminName');
        dispatch(logout({adminName}));
        navigate('/adminLogin');
    }
    return (
        <>
            <div className="col-sm-3 sidenav text-center" style={{ padding: '20px', backgroundColor: 'black', height: '2000px' }}>
                <div className='text-center' style={{ backgroundColor: 'darkblue', width: '100%' }}>
                    <h4 style={{ color: 'white', fontWeight: 'bold', padding: '15px' }}>Admin Panel</h4>
                </div>
                <hr style={{ backgroundColor: 'white' }} />
                <ul className="nav nav-pills nav-stacked" style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <li className="listPanel"><Link to="/adminDashboard"  style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listlink btn  btn-outline-primary'>Admin Dashboard</Link></li>
                    <li className="listPanel"><Link to="/viewJobPost" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listlink btn  btn-outline-primary'>Job Posts</Link></li>
                    <li className="listPanel"><Link to="/viewJobApplicants" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listlink btn  btn-outline-primary'>Job Applicants</Link></li>
                    <li className="listPanel"><Link to="/viewJobNature" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listlink btn  btn-outline-primary'>Job Nature</Link></li>
                    <li className='listPanel'><Link to='/jobPost' style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listlink btn  btn-outline-primary'>Job Post</Link></li>
                    <li className="listPanel"><button  onClick={handleAdminLogout} className='listlink btn  btn-outline-primary' style={{ fontSize: '20px', fontWeight: 'inherit'}}>Logout</button></li>
                </ul><br />
                {/* <div className='text-center' style={{padding:'50px'}}>
                    <table style={{padding:'50px',margin:'20px'}}>
                        <tr>
                            <td>
                                <Link to="/viewJobPost" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listLink'>Job Posts</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/viewJobApplicants" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listLink'>Job Applicants</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/viewJobNature" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listLink'>Job Nature</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/" style={{ fontSize: '20px', fontWeight: 'inherit' }} className='listLink'>Logout</Link>
                            </td>
                        </tr>
                    </table>
                </div> */}
            </div>
        </>
    )
}

export default AdminSideBar