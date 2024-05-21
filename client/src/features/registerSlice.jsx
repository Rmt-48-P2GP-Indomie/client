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

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    }
  }
});

export const { setRegisterUser } = registerSlice.actions;

export const registerUser = (user) => {
    return async () => {
        await axiosInstance({
            method: 'post',
            url: '/register',
            data: user
        })
        toast.success('Register Success!', {
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

export default registerSlice.reducer;

