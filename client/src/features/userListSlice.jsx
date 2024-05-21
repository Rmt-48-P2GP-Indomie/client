import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

const initialState = {
    list: []
  };


const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
      fetchUserList: (state, {payload}) => {
        state.list = payload;
      }
    }
  });

const { fetchUserList } = userListSlice.actions;

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance({
              method: 'get',
              url: '/profile',
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            })
            dispatch(fetchUserList(data))
          } catch (error) {
            console.log(error)
          }
    }
  }

export default userListSlice.reducer