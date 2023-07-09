import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.png'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../../Redux/AuthSlice'
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const name=localStorage.getItem('name');
  const employerName=localStorage.getItem('employerName');
  const type=localStorage.getItem('type');
  const {Logouttoggle, EmployerLogouttoggle}=useSelector(state=>state?.Auth);
  const handleLogout=()=>{
    dispatch(logout({type}));
    navigate('/register');
  }
  const handleLogoutEmployer=()=>{
    dispatch(logout({employerName}))
    navigate('/');
  }
  return (
    <>
      <div>
        <div className="header_container background-color-orange-light top_bar" style={{position:'static'}}>
          <div className="top_bar_container">
            <div className='container'>
              <div className="row">
                <div className="col">
                  <div className="header_content d-flex flex-row align-items-center justify-content-start">
                    <div className="logo_container">
                      <a href="index.html">
                        <img src={logo} className="logo-text" alt='' />
                      </a>
                    </div>
                    <nav className="main_nav_contaner ml-auto">
                      <ul className="main_nav">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/jobList">Job </Link></li>
                        <li><Link to='/blog'> Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        {
                          (Logouttoggle===true)?<>
                            <li><Link  style={{backgroundColor:'darkorange',color:'white',border:'none',textDecoration:'none',padding:'10px'}}>hi.{name.split(' ')[0]}</Link></li>
                            <li><button style={{backgroundColor:'orangered',color:'white',border:'none'}} onClick={handleLogout}>logout</button></li>
                          </>:<>
                            {/* <li><Link to='/login'>SignIn</Link></li>
                            <li><Link to='/register'>SignUp</Link></li> */}
                          </>
                        }
                        {
                          (EmployerLogouttoggle===true)?<>
                          <li><Link  style={{backgroundColor:'darkorange',color:'white',border:'none',textDecoration:'none',padding:'10px'}}>hi.{employerName}</Link></li>
                          <li><button style={{backgroundColor:'orangered',color:'white',border:'none'}} onClick={handleLogoutEmployer}>logout employer</button></li>
                          </>:<>
                          <li><Link  style={{backgroundColor:'darkorange',color:'white',border:'none',textDecoration:'none',padding:'10px'}} to='/employerLogin'>Employer SignIn</Link></li>
                          </>
                        }
                      </ul>
                      <div className=" Post-Jobs">
                        <Link to='/jobPost' className>
                          Post Jobs
                        </Link>
                      </div>
                      <div className="hamburger menu_mm menu-vertical">
                        <i className="large material-icons font-color-white menu_mm menu-vertical">menu</i>
                      </div>
                    </nav>
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

export default Header