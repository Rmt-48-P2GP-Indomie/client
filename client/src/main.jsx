import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Register from './pages/Register';
import { store } from './store'
import { Provider } from 'react-redux'
import Login from './pages/Login';
import App from './pages/App';
import Chat from './pages/Chat';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if (token) return redirect('/');
      return null
    }
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if (token) return redirect('/');
      return null
    }
  },
  {
    path: "/",
    element: <App />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if (!token) return redirect('/login');
      return null
    }
  },
  {
    path: "/chat/:username",
    element: <Chat />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if (!token) return redirect('/login');
      return null
    }
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
