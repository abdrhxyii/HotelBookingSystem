import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <React.Fragment>
      <nav className="flex w-full bg-blue-400 h-16 items-center justify-between text-white">
        <div className="m-5">
          <span className="cursor-pointer text-lg font-bold">BookingWorld.com 👋</span>
        </div>
        <div className="text-white m-5 flex w-60 justify-between">
          {!isLoggedIn ? (
            <>
              <button className="cursor-pointer font-semibold" onClick={() => navigate('/home')}>
                Home
              </button>
              <button className="cursor-pointer font-semibold" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="cursor-pointer font-semibold" onClick={() => navigate('/register')}>
                Signup
              </button>
            </>
          ) : (
            <button className="cursor-pointer font-semibold ml-32" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
