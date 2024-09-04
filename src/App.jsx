import React, { useState } from 'react'
import { UserRound } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import './App.css'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <div className='body-main-wrapper'>
        <div className="search-wrapper">
          <input className='search' type="search" placeholder='Search...' />
        </div>
        <div className='checkInOut-wrapper'>
          <Calendar size={30}/>
          <button className='checkInOut-btn'>
            Check-in Date - Check-out Date
          </button>
        </div>
        <div className='select-down'>
          <UserRound />
          <button>
          <label for="numbers">2 Adults - 0 Children - 1 Room</label>
          <select name="numbers" id="numbers">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          </button>
        </div>
        {/* <div>
          <button className='bg-black text-white p-1 pl-6 pr-6'>
            Search
          </button>
        </div> */}
      </div>
    </React.Fragment>
  )
}

export default App