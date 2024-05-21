export default function UserList({user, onSelect}) {

  const handleClick = (name) => {
    onSelect(name)
  }
  return (
    <div
      className="flex items-center justify-between py-2 border-b border-gray-300 cursor-pointer"
      onClick={() => handleClick(`${user.User.username}`)}
    >
      <div>{user.User.username}</div>
      <div className="text-gray-500 text-sm">{user.bio}</div>
    </div>
  );
}
