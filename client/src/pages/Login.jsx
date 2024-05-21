import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axios";

export default function Login(){
    const nav = useNavigate()
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
        console.log(user)   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axiosInstance({
                method: 'post',
                url: '/login',
                data: user
            })
            localStorage.setItem('access_token', data.access_token)
            nav('/')
        } catch (error) {
            console.log(error);
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

    return (
        <div
  className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      'url("https://img.freepik.com/free-vector/abstract-blurred-background_1034-237.jpg?w=740&t=st=1716277832~exp=1716278432~hmac=cff727dbd6e4f67ef43f237b2138124c797a058deaf0ab912728cf0ad8ec08b0")'
  }}
>
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <img
          src="https://www.svgrepo.com/show/90459/coffee-cup.svg"
          width={100}
          alt=""
          srcSet=""
        />
        <h1 className="mb-2 text-2xl">Ngobrol</h1>
        <span className="text-gray-300 mt-2">Enter Your Account Details</span>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="mb-4 text-lg">
          <input
            className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 text-lg">
          <input
            className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 text-lg">
          <input
            className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="Password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button
            type="submit"
            className="rounded-3xl bg-black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600"
          >
            Login
          </button>  
        </div>
      </form>
      <span className="mt-3 text-gray-300 flex justify-center">Doesnt have an account yet?  <Link to={'/register'}>Register</Link></span>
    </div>
  </div>
</div>

    )
}