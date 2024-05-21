import { useEffect, useState } from "react";
import "./App.css";
import Messages from "./components/messages";
import Sidebar from "./components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatMessages } from "./features/chatMessagesSlice";


function App() {
  const [currentChat, setCurrentChat] = useState("");
  const chatMessages = useSelector((state) => state.chatMessages.list)
  const dispatch = useDispatch();

  const handleUserSelect = (name) => {
    setCurrentChat(name)
  }
  
  useEffect(() => {
    if (currentChat) {
      dispatch(fetchChatMessages(currentChat));
    }
  }, [currentChat, dispatch]);

  return (
    <div className="flex h-screen">
      <Sidebar handleUserSelect={handleUserSelect}/>
      <div className="w-3/4 flex flex-col">
        <div className="border-b border-gray-300 p-4 flex items-start">
        <img className="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/150" alt="User Avatar" />
          <h2 className="text-xl font-semibold">{currentChat}</h2>
        </div>
        <div className="flex-grow p-4 overflow-auto">
          { chatMessages && chatMessages.map((e) => (<Messages key={e.id} message={e}/>))
          }
        </div>
        <div className="p-4 border-t border-gray-300">
          <div className="flex">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
