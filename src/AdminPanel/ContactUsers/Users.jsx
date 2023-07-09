import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Vortex } from 'react-loader-spinner';
import AdminSideBar from '../AdminSideBar';
import { fetchUserContact,deleteUserContact } from '../../Redux/ContactSlice';
import {toast} from 'react-toastify'
const Users = () => {
  const dispatch=useDispatch();
  const {data}=useSelector(state=>state?.user_contact);  
  useEffect(()=>{
    //Async Operation();
    dispatch(fetchUserContact());
  },[]);

  const handleDelete=async (id)=>{
        await deleteUserContact(id);
        toast.error(`Record of id ${id} has been removed!!!`,{
            theme:'colored'
        });
        dispatch(fetchUserContact());//refreshing the table...
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
                                                <th scope="col">Name</th>
                                                <th scope='col'>Subject</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Mobile No</th>
                                                <th scope="col">Message</th>
                                                <th scope="col"></th>    
                                            </tr>
                                        </thead>
                                        <tbody style={{backgroundColor:'lightgray'}}>
                                            {
                                                (data?.length === 0) ? <>
                                                    <tr>
                                                        <th colSpan={7} className='text-center'><h1 className='text-danger'>Empty Record!!!!</h1></th>
                                                    </tr>
                                                </> : <>
                                                    {
                                                        data?.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <tr key={index+1}>
                                                                        <td>{item?.id}</td>
                                                                        <td>{item?.name}</td>
                                                                        <td>{item?.subject}</td>
                                                                        <td>{item?.email}</td>
                                                                        <td>{item?.mobile}</td>
                                                                        <td>{item?.message}</td>
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

export default Users