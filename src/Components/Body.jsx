import React from 'react';

function Body({ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests, children, setChildren, rooms, setRooms }) {
  return (
    <>
      <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Check in</p>
        <input
          className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto'
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>

      <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Check Out</p>
        <input
          className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto'
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Guests</p>
        <input
          className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto'
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder='Guests'
        />
      </div>

      <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Children</p>
        <input
          className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto'
          type="number"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          placeholder='Children'
        />
      </div>

      <div className='mb-2 sm:mb-2 md:mb-auto lg:mb-auto'>
        <p>Rooms</p>
        <input
          className='h-12 rounded-xl p-2 w-full sm:w-full md:w-full lg:w-auto'
          type="number"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          placeholder='Rooms'
        />
      </div>
    </>
  );
}

export default Body;
