import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../Redux/AuthSlice';
import { Vortex } from 'react-loader-spinner'
import Header from '../Components/Commons/Header';
import Footer from '../Components/Commons/Footer';


const initialValue = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  image: ""
}
const EmployerRegistration = () => {
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
    let name = localStorage.getItem("name")
    if (name !== null && name !== undefined && name !== "") {
      navigate("/login");
    }
  }
  useEffect(() => {
    redirectUser()
  }, [redirectReg])

  return (
    <>
      <Header />
      <div>
        <div style={{ marginLeft: '360px' }}>
          <div className="col-md-7 mt-2">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: 'gray', color: 'white', fontWeight: 'bold' }}>Employer Registration</div>
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
                      <button type="submit" onClick={SubmitInfo} className="btn btn-primary">Register</button>
                    </>
                  }
                </form>
                **If You already Register  <Link to="/employerLogin">Click Here!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EmployerRegistration