import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
  user: {
    username: '',
    email: '',
    password: ''
  }
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setLoginUser: (state, action) => {
        state.user = { ...state.user, ...action.payload };
      }
    }
  });

export const {setLoginUser} = loginSlice.actions


export const loginUser = (user) => {
    return async () => {
        const {data} = await axiosInstance({
            method: 'post',
            url: '/login',
            data: user
        })
        localStorage.setItem('access_token', data.access_token)
        toast.success('Login Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }
}

export default loginSlice.reducer;

