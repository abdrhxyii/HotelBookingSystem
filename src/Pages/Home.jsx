import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from '../Components/Body';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import { message } from 'antd';

const Home = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const [children, setChildren] = useState('');
  const [rooms, setRooms] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!destination || !checkInDate || !checkOutDate || !guests || !rooms) {
      message.warning('Please fill in all the required fields: destination, check-in date, check-out date, guests, and rooms.');
      return;  
    }
    navigate(`/search?destination=${destination}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&guests=${guests}&children=${children}&rooms=${rooms}`);
  };

  const fetchAllLocations = async () => {
    try {
      const response = await axios.get('http://localhost:4001/hotels/locations');
      setSuggestions(response.data);
      setShowSuggestions(true); 
    } catch (error) {
      console.error('Error fetching all locations:', error);
    }
  };

  const handleLocationChange = async (e) => {
    const value = e.target.value;
    setDestination(value);
    setShowSuggestions(value.length > 2);

    if (value.length > 2) {
      try {
        const response = await axios.get('http://localhost:4001/hotels/locations', {
          params: { search: value },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setDestination(suggestion);
    setShowSuggestions(false);
  };

  return (
    <React.Fragment>
      <div className="bg-blue-300 p-6 sm:p-6 md:p-24 lg:p-24 h-full m-6 sm:m-6 md:m-10 lg:m-10 rounded-xl relative">
        <div className="flex gap-2 w-[100%]">
          <input
            className="w-full h-12 rounded-md p-2"
            type="search"
            placeholder="Search destination..."
            value={destination}
            onClick={fetchAllLocations}
            onChange={handleLocationChange}
          />
          <button
            className="bg-blue-700 pl-8 px-4 py-2 rounded-md text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 mt-2 w-[75%] bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        <span className="flex justify-between mt-6 flex-col sm:flex-col md:sm:flex-row lg:sm:flex-row">
          <Body
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            guests={guests}
            setGuests={setGuests}
            children={children}
            setChildren={setChildren}
            rooms={rooms}
            setRooms={setRooms}
          />
        </span>
      </div>
      <span className="text-3xl font-semibold p-6 sm:p-6 lg:p-10 md:p-10">Explore Sri Lanka</span>
      <div className="p-6 lg:p-10 flex-row gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </React.Fragment>
  );
};

export default Home;
