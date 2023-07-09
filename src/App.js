import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import JobDetail from './Pages/JobDetail'
import JobList from './Pages/JobList'
import Blog from './Pages/Blog'
import PostJob from './Pages/PostJob'
import JobApplication from './Pages/JobApplication'
import AdminDashboard from './AdminPanel/AdminDashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewJobPost from './AdminPanel/JobPost/ViewJobPost'
import ViewJobApplicants from './AdminPanel/JobApplicants/ViewJobApplicants'
import ViewJobNature from './AdminPanel/JobNature/ViewJobNature'
import EditJobPost from './AdminPanel/JobPost/EditJobPost'
import EditJobApplicants from './AdminPanel/JobApplicants/EditJobApplicants'
import Login from './Authetication/Login'
import Registration from './Authetication/Registration'
import { useEffect } from 'react'
import { check_token } from './Redux/AuthSlice'
import { useDispatch } from 'react-redux'
import AdminRegister from './Authetication/AdminRegister'
import AdminLogin from './Authetication/AdminLogin'
import EmployerLogin from './Authetication/EmployerLogin'
import EmployerRegistration from './Authetication/EmployerRegistration'
import BlogDetail from './Pages/BlogDetail'
import SearchedContent from './Pages/SearchedContent'
import FilterJobContent from './Pages/FilterJobContent'
import Users from './AdminPanel/ContactUsers/Users'
function App() {
  const dispatch = useDispatch();
  const PrivateRouteUser = ({ children }) => {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type');
    if (token !== null && token !== '' && token !== undefined && type === '1') {
      return (
        <>
          {
            children
          }
        </>
      )
    }
    else {
      return (
        <>
          <Navigate to='/register' />
        </>
      )
    }
  }

  const PrivateRouteAdmin = ({ children }) => {
    const name = localStorage.getItem('adminName');
    const token = localStorage.getItem('adminToken')
    const employerName=localStorage.getItem('employerName');
    if ((name === 'Admin' && token !== '' && token !== undefined && token !== null)||employerName==='Employer') {
      return (<>
        {children}
      </>)
    }
    else
    {
      return (<Navigate to='/adminLogin'/>)
    }
  }
  const PrivateRoutesNames = [
    {
      path: '/jobApplication',
      component: <JobApplication />
    }
  ];

  const PublicRoutesNames = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/contact',
      component: <Contact />
    },
    {
      path: '/jobDetail',
      component: <JobDetail />
    },
    {
      path: '/jobList',
      component: <JobList />
    },
    {
      path: '/blog',
      component: <Blog />
    },
    {
      path: '/jobDetail/:id',
      component: <JobDetail />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/register',
      component: <Registration />
    },
    {
      path: '/adminRegister',
      component: <AdminRegister />
    },
    {
      path: '/adminLogin',
      component: <AdminLogin />
    },
    {
      path:'/employerLogin',
      component:<EmployerLogin/>
    },
    {
      path:'/employerRegistration',
      component:<EmployerRegistration/>
    },
    {
      path:'/blogDetails/:id',
      component:<BlogDetail/>
    },
    {
      path:'/searchedContent',
      component:<SearchedContent/>
    },
    {
      path:'/filterJobContent/:id',
      component:<FilterJobContent/>
    },
  ]

  const PrivateAdminRoutesNames = [
    {
      path: '/adminDashboard',
      component: <AdminDashboard />
    },
    {
      path: '/viewJobPost',
      component: <ViewJobPost />
    },
    {
      path: '/viewJobApplicants',
      component: <ViewJobApplicants />
    },
    {
      path: '/viewJobNature',
      component: <ViewJobNature />
    },
    {
      path: '/editJobPost/:id',
      component: <EditJobPost />
    },
    {
      path: '/editJobApplication/:id',
      component: <EditJobApplicants />
    },
    {
      path: '/editJobApplication/:id',
      component: <EditJobApplicants />
    },
    {
      path: '/jobPost',
      component: <PostJob />
    },
    {
      path: '/users',
      component: <Users/>
    }
  ];
  useEffect(() => {

    dispatch(check_token());

  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {
            PublicRoutesNames?.map((route, index) => {
              return (<>
                <Route
                  key={index + 1}
                  exact path={route?.path}
                  element={route?.component}
                />
              </>)
            })
          }
          {
            PrivateRoutesNames?.map((route, index) => {
              return (<>
                <Route
                  key={index + 1}
                  exact path={route?.path}
                  element={(<PrivateRouteUser>{route?.component}</PrivateRouteUser>)}
                />
              </>)
            })
          }
          {
              PrivateAdminRoutesNames?.map((route,index)=>{
                  return (<>
                    <Route 
                      key={index+1}
                      exact path={route?.path}
                      element={<PrivateRouteAdmin>{route?.component}</PrivateRouteAdmin>}
                    />
                  </>)
              })
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
