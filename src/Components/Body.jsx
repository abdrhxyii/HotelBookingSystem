import React from 'react'

function Body() {
  return (
    <>
        <div>
        <p>Check in</p>
        <input className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto' type="date" placeholder='Search...' />
        </div>

        <div>
        <p>Check Out</p>
        <input className='h-12 rounded-xl p-2' type="date" placeholder='Search...' />
        </div>

        <div>
        <p>Guest</p>
        <input className='h-12 rounded-xl p-2' type="number" placeholder='Guest' />
        </div>

        <div>
        <p>Child</p>
        <input className='h-12 rounded-xl p-2' type="number" placeholder='Child' />
        </div>

        <div>
        <p>Room</p>
        <input className='h-12 rounded-xl p-2' type="number" placeholder='Rooms' />
        </div>
    </>
  )
}


export default Body