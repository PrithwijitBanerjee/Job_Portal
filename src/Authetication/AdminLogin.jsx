import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, RegLog } from '../Redux/AuthSlice';
import AdminSideBar from '../AdminPanel/AdminSideBar';
const initialValue = {
    email: "",
    password: ""
}
const AdminLogin = () => {
    const [user, setUser] = useState(initialValue)
    const { redirectTo, loading } = useSelector((state) => state?.Auth);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const dispatch = useDispatch();

   

    //form validation
    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        return error
    }
    //onchange validation
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }
    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(ErrorList)
        // let data = {
        //     "email": user.email,
        //     "password": user.password,
        // }
        dispatch(loginRequest(user))
    }


    //redirect if get the token or not get the token 
    const redirectUser = () => {
        let token = localStorage.getItem("adminToken")
        if (token !== null && token !== undefined && token !== "") {
            navigate("/adminDashboard");
        }
    }
    useEffect(() => {
        redirectUser()
    }, [redirectTo])
    const log = () => {
        dispatch(RegLog())
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row-content'>
                    <AdminSideBar />
                    <div className='col-sm-9'>
                        <div style={{ width: '70%' }}>
                            <div className="col-md-7 mt-5">
                                <div className="card" style={{ width: '500px', marginLeft: '240px', marginTop: '150px', boxShadow: '20px 20px 50px', borderRadius: '20px' }}>
                                    <div className="card-header bg-secondary text-white" style={{ fontWeight: 'bolder', fontSize: '20px', borderRadius: '20px 20px 0px 0px' }}>Admin Login</div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" name="email" className="form-control"

                                                    onChange={e => postUserData(e)} />
                                                <span style={{ color: "red" }}> {error.email} </span>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Password</label>
                                                <input type="password" name="password" className="form-control"

                                                    onChange={e => postUserData(e)} />
                                                <span style={{ color: "red" }}> {error.password} </span>
                                            </div>
                                            {
                                                loading ? <>
                                                    <button class="btn btn-primary" type="button" disabled>
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        Loading...
                                                    </button>
                                                </> : <>
                                                    <button type="submit" onClick={SubmitInfo} className="btn btn-primary">Login</button>
                                                </>
                                            }
                                        </form>
                                        <Link onClick={log} to="/adminRegister">Register</Link>
                                        {/* <Link to="/register">Register</Link> */}

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

export default AdminLogin