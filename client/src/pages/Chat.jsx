import { useEffect, useState } from "react";
import Messages from "../components/messages";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatMessages } from "../features/chatMessagesSlice";
import { socket } from "../utils/socket";
import { useParams } from "react-router-dom";
import { fetchUser } from "../features/userListSlice";


function Chat() {
  const {username} = useParams();
  const [sendMessages, setSendMessages] = useState("")
  const chatMessages = useSelector((state) => state.chatMessages.list)
  const dispatch = useDispatch();

  const scrollToBottom = () => {
    const element = document.querySelector('.chat-container');
    element.behavior = 'smooth';
    element.scrollTop = element.scrollHeight;
};
  
useEffect(() => {
  scrollToBottom();
}, [chatMessages]);

  useEffect(() => {
      dispatch(fetchChatMessages(username));
  }, [username]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      socket.emit("sendMessage", {username, access_token: localStorage.getItem('access_token'), text: sendMessages})
      setSendMessages('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect bang') 
    });

    socket.on('sendMessage/response', () => {
      dispatch(fetchChatMessages(username));
      dispatch(fetchUser());
    })
    return () => {
      socket.on('disconnect', () => {});
    }
  }, [])


  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="w-3/4 flex flex-col">
        <div className="border-b border-gray-300 p-4 flex items-start">
        <img className="w-10 h-10 rounded-full mr-3" src="https://picsum.photos/seed/picsum/200/300" alt="User Avatar" />
          <h2 className="text-xl font-semibold">{username}</h2>
        </div>
        <div className="flex-grow p-4 overflow-auto chat-container">
          { chatMessages && chatMessages.map((e) => (<Messages key={e.id} message={e}/>))
          }
        </div>
        <div className="p-4 border-t border-gray-300">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Type here..."
              name='text'
              value={sendMessages}
              onChange={(event) => setSendMessages(event.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
