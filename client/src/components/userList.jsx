import { Link } from "react-router-dom";

export default function UserList({user}) {

  return (
    <Link to={`/chat/${user.User.username}`}
      className="flex items-center justify-between py-2 border-b border-gray-300 cursor-pointer"

    >
      <div>{user.User.username}</div>
      <div className="text-gray-500 text-sm">{user.bio}</div>
    </Link>
  );
}
