import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Login = () => {
  const navigate = useNavigate()
  const [newUser, setNewuser] = useState({
    email: "",
    password: "",
  })

  const handleSubmission = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:4001/guests/login', newUser);
      setNewuser({
        email: "",
        password: "",
      })
      localStorage.setItem("token", res.data.token)
      if(res.data.role === "admin"){
        navigate('/dashboard')
        message.success('Login successful');
      }else{
        navigate('/home')
        message.success('Login successful');
      }
    }catch(error){
      if (error.response && error.response.data) {
        message.error(error.response.data.error);
      }
    }
  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form className="space-y-4" onSubmit={handleSubmission}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e) => setNewuser({...newUser, email: e.target.value})}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => setNewuser({...newUser, password: e.target.value})}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')} className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
