import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import { registerUser } from '../Redux/AuthSlice';
import AdminSideBar from '../AdminPanel/AdminSideBar';

const initialValue = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    image: ""
}
const AdminRegister = () => {
    const { redirectReg, loading } = useSelector((state) => state?.Auth);
    const [user, setUser] = useState(initialValue);
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validation = () => {
        let error = {}

        if (!user.name) {
            error.name = "Name is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.mobile) {
            error.mobile = "Mobile is Required"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }

        return error
    }

    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })


        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "@mobile is Required" })
                setUser({ ...user, mobile: "" })
            } else {
                setError({ ...error, mobile: "" })
                setUser({ ...user, mobile: value })
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

    const SubmitInfo = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        let formData = new FormData();
        if (Object.keys(ErrorList).length === 0) {
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("mobile", user.mobile);
            formData.append("password", user.password);
            dispatch(registerUser(formData))

        }
    }

    const redirectUser = () => {
        let name = localStorage.getItem("adminName")
        if (name !== null && name !== undefined && name !== "") {
            navigate("/adminLogin");
        }
    }
    useEffect(() => {
        redirectUser()
    }, [redirectReg])
    return (
        <>
            <div className='container-fluid'>
                <div className='row-content'>
                    <AdminSideBar />
                    <div className='col-sm-9'>
                        <div style={{ width: '70%' }}>
                            <div className="col-md-7 mt-2">
                                <div className="card" style={{width:'500px',marginLeft:'240px',marginTop:'100px',boxShadow:'20px 20px 50px',borderRadius:'20px'}}>
                                    <div className="card-header bg-secondary text-white"  style={{fontWeight:'bolder',fontSize:'20px',borderRadius:'20px 20px 0px 0px'}}>Admin Register</div>
                                    <div className="card-body">
                                        <form method='post' encType="multipart/form-data">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    value={user.name}
                                                    onChange={e => postUserData(e)} />
                                                <span style={{ color: "red" }}> {error.name} </span>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    value={user.email}
                                                    onChange={e => postUserData(e)} />
                                                <span style={{ color: "red" }}> {error.email} </span>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Mobile</label>
                                                <input type="text" name="mobile" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    value={user.mobile}
                                                    onChange={e => postUserData(e)} />
                                                <span style={{ color: "red" }}> {error.mobile} </span>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Password</label>
                                                <input type="password" name="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    value={user.password}
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
                                                    <button type="submit" onClick={SubmitInfo} className="btn btn-primary">Register</button>
                                                </>
                                            }
                                        </form>
                                        **If You already Register  <Link to="/adminLogin">Click Here!</Link>
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

export default AdminRegister