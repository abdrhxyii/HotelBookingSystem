import React from 'react'

function Navbar() {
  return (
    <React.Fragment>
    <nav className="flex w-full bg-black h-16 items-center justify-between text-white">
        <div className='m-5'>
            <span>BookingWorld.com</span>
        </div> 
        <div className='text-white m-5 flex w-96 justify-between'>
            <span>Home</span>
            <span>About</span>
            <span>Login/Signup</span>
        </div>
    </nav>
    </React.Fragment>
  )
}

export default Navbar
