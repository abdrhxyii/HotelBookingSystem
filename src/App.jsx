import React, { useState } from 'react'
import { UserRound } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import PropertyCard from './Components/PropertyCard';
import './App.css'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
        <div className="bg-blue-300 p-10 sm:p-10 md:p-24 lg:p-24 h-full m-6 sm:m-6 md:m-10 lg:m-10 rounded-xl">
          <div className='flex gap-2'>
            <input className='w-full h-12 rounded-md p-2' type="search" placeholder='Search...' />
            <button className='bg-blue-700 pl-8 pr-8 rounded-md text-white'>
              Search
            </button>
          </div>

          <span className='flex justify-between mt-6 flex-col sm:flex-col md:sm:flex-row lg:sm:flex-row'>
            <Body/>
          </span>
        </div>
        <span className='text-3xl font-semibold p-6 sm:p-6 lg:p-10 md:p-10'>Explore Sri Lanka</span>
        <div className="p-10 flex-row gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
        </div>
    </React.Fragment>
  )
}

export default App