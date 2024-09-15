import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Register = () => {
  const navigate = useNavigate()
  const [newUser, setNewuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleSubmission = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:4001/guests/register', newUser);
      setNewuser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      })
      message.success('Registration successful');
      console.log(res, "res")
      navigate('/login')
    }catch(error){
      if (error.response && error.response.data) {
        message.error(error.response.data.error);
      }
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form className="space-y-4" onSubmit={handleSubmission}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={newUser.firstName}
              onChange={(e) => setNewuser({...newUser, firstName: e.target.value})}
              id="firstName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={newUser.lastName}
              onChange={(e) => setNewuser({...newUser, lastName: e.target.value})}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name"
              required

            />
          </div>

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
              Register
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
