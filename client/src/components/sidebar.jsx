import { useEffect } from "react";
import UserList from "./userList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/userListSlice";

export default function Sidebar({handleUserSelect}){
    const userList = useSelector((state) => state.userList.list)
    const dispatch = useDispatch();


      useEffect(() => {
        dispatch(fetchUser());
        console.log(userList)
      }, [])
      
    return (
        <div className="w-1/4 border-r border-gray-300">
        <div className="p-4 border-b border-gray-300">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded">New conversation</button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Conversations</h2>
            <div className="mt-2">
            {userList && userList.map((e) => (<UserList key={e.id} user={e} onSelect={handleUserSelect}/>))}
            </div>
          </div>
        </div>
      </div>
    )
}