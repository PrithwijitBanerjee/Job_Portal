import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, RegLog } from '../Redux/AuthSlice';
import { Vortex } from 'react-loader-spinner'
import Header from '../Components/Commons/Header';
import Footer from '../Components/Commons/Footer';
const initialValue = {
    email: "",
    password: ""
}
const Login = () => {
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
        let token = localStorage.getItem("token")
        if (token !== null && token !== undefined && token !== "") {
            navigate("/jobApplication");
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
        <Header/>
            <div style={{ marginLeft: '360px' }}>
                <div className="col-md-7 mt-5">
                    <div className="card" style={{boxShadow:'20px 20px 50px',borderRadius:'20px'}}>
                        <div className="card-header" style={{backgroundColor:'gray',color:'white',fontWeight:'bold',borderRadius:'20px 20px 0px 0px',fontSize:'20px'}}>Job Seeker Login</div>
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
                                        <button type="submit" onClick={SubmitInfo} className="btn btn-primary">Login</button>
                                    </>
                                }
                            </form>

                            Don't have an account?? <Link onClick={log} to="/register">Register</Link>
                            {/* <Link to="/register">Register</Link> */}

                        </div>
                    </div>
                </div>
            </div>
        <Footer/>    
        </>
    )
}

export default Login