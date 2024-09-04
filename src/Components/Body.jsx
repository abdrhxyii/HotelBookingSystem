import React from 'react'

function Body() {
  return (
    <>
        <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Check in</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="date" placeholder='Search...' />
        </div>

        <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Check Out</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="date" placeholder='Search...' />
        </div>

        <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Guest</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="number" placeholder='Guest' />
        </div>

        <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Child</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="number" placeholder='Child' />
        </div>

        <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Room</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="number" placeholder='Rooms' />
        </div>
    </>
  )
}


export default Body