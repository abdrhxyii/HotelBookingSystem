import React from 'react'

function Navbar() {
  return (
    <React.Fragment>
    <nav className="flex w-full bg-blue-400 h-16 items-center justify-between text-white">
        <div className='m-5'>
            <span className='cursor-pointer'>BookingWorld.com</span>
        </div> 
        <div className='text-white m-5 flex w-96 justify-between'>
            <span className='cursor-pointer'>Home</span>
            <span className='cursor-pointer'>List you property</span>
            <span className='cursor-pointer'>Login/Signup</span>
        </div>
    </nav>
    </React.Fragment>
  )
}

export default Navbar
