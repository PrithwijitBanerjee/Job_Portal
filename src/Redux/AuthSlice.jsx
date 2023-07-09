import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../Api/apiUrl'
import { toast } from 'react-toastify';


const initialState = {
  loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null,
  AdminLogouttoggle: false,
  EmployerLogouttoggle:false
}

export const registerUser = createAsyncThunk("user/signUp", async (user) => {
  try {
    const res = await axiosInstance.post("register", user);
    return res?.data;

  } catch (error) {
    toast.error(error?.response?.data?.msg, {
      theme: 'colored'
    });
    console.log(error);
  }
});

export const loginRequest = createAsyncThunk("user/signIn", async (user) => {
  try {
    const res = await axiosInstance.post("login", user);
    console.log('job Seeker login credential:',res?.data);
    return res?.data;
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      theme: 'colored'
    });
    console.log(error);
  }
});

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //check for auth token 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      let adminToken = localStorage.getItem("adminToken");
      let employerToken=localStorage.getItem('employerToken');
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
      if (adminToken !== null && adminToken !== undefined) {
        state.AdminLogouttoggle = true;
      }
      if(employerToken!==null && employerToken!==undefined)
      {
        state.EmployerLogouttoggle=true;
      }
    },

    logout: (state, { payload }) => {
      const type = payload?.type;
      const adminName = payload?.adminName;
      const employerName=payload?.employerName;
      if (type === '1') {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem('type');
        localStorage.removeItem('email');
        toast.success("logout successfully", {
          theme: 'colored'
        });
        state.Logouttoggle = false
      }
      if (adminName === 'Admin') {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminName");
        toast.success("logout successfully", {
          theme: 'colored'
        });
        state.AdminLogouttoggle = false
      }
      if(employerName==='Employer')
      {
        localStorage.removeItem('employerToken');
        localStorage.removeItem('employerName');
        toast.success('logout successfully',{
          theme:'colored'
        });
        state.EmployerLogouttoggle=false;
      }
    },


    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false
      
    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    }


  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = '';
      if (payload.success === true) {
        localStorage.setItem("name", payload.data.name)
        state.redirectReg = "/login"
        //toast(payload?.token)
        toast.success(`hi ${payload?.data?.name} Register successfully`, {
          theme: 'colored'
        });
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //login
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload?.status === 200 && payload?.user?.type===1) {
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.user.name);
        localStorage.setItem("type", payload?.user?.type);
        localStorage.setItem('email',payload?.user?.email);
        const name = localStorage.getItem('name');
        state.Logouttoggle = true
        state.redirectTo = "/jobApplication"
        toast.success(`${name} ${payload?.message}`, {
          theme: 'colored'
        })
      }
     else if (payload?.status === 200 && payload?.user?.name === 'Admin') {
        localStorage.setItem("adminToken", payload?.token);
        localStorage.setItem("adminName", payload?.user?.name);
        const name = localStorage.getItem('adminName');
        state.AdminLogouttoggle = true
        state.redirectTo = "/adminDashboard"
        toast.success(`${name} ${payload?.message}`, {
          theme: 'colored'
        })
      }
      else if(payload?.status === 200 && payload?.user?.name === 'Employer')
      {
        localStorage.setItem('employerName',payload?.user?.name);
        localStorage.setItem('employerToken',payload?.token);
        const name=localStorage.getItem('employerName');
        state.redirectTo='/jobPost';
        state.EmployerLogouttoggle=true;
        toast.success(`${name} ${payload?.message}`, {
          theme: 'colored'
        });
      }
      else{
        toast.error('Invalid Credential!!!',{
          theme:'colored'
        });
      }

    },
    [loginRequest.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
})

export const { check_token, redirectToo, logout, redirectTo_Register, RegLog } = AuthSlice.actions

