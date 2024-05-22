export default function Messages({ message }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);   
        // Get formatted date part (e.g., 21 May)
        const formattedDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(date);
        
        // Get formatted time part (e.g., 13:48)
        const formattedTime = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
      
        return `${formattedDate}, ${formattedTime}`;
      };

  return (
    <div
    className={`flex ${message.messageBelongsToLoggedUser ? " flex-row-reverse text-right" : "justify-start"} mb-4 items-center`}
    >
      <div className="mr-4 ml-4">
        <img
          className="w-10 h-10 rounded-full"
          src='https://picsum.photos/seed/picsum/200/300'
          alt="User Avatar"
        />
      </div>
      <div>
      <div className="text-gray-500 text-sm mt-1">{message.Sender.username}</div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p>{message.text}</p>
        </div>
        <div className="text-gray-500 text-sm mt-1">{formatDate(message.createdAt)}</div>
      </div>
    </div>
  );
}
