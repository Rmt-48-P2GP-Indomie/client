
import Sidebar from "../components/sidebar";




function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-3/4 flex flex-col">
        <div className="border-b border-gray-300 p-4 flex items-start">
        <img className="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/150" alt="User Avatar" />
          <h2 className="text-xl font-semibold"></h2>
        </div>
        <div className="flex-grow p-4 overflow-auto chat-container flex justify-center item-center">
          <h3>Welcome to Ngobrol</h3>
        </div>
        <div className="p-4 border-t border-gray-300">
          <form className="flex">
            <input
              type="text"
              placeholder="Type here..."
              name='text'

              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
