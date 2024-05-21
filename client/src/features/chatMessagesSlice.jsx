import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axios";

const initialState = {
    list: []
};

const chatMessagesSlice = createSlice({
    name: 'chatMessages',
    initialState,
    reducers: {
        setChatMessages: (state, {payload}) => {
            state.list = payload
        }
    }
})

const {setChatMessages} = chatMessagesSlice.actions;

export const fetchChatMessages = (currentChat) => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance({
                method: 'get',
                url: `/${currentChat}/message`,
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
              })
              dispatch(setChatMessages(data));
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, {
              position: "top-right",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
              });
        }
    }
}
export default chatMessagesSlice.reducer