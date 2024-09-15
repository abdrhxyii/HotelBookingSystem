import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import HotelCard from '../Components/HotelCard';
import axios from 'axios'; 

export const PropertyListing = () => {
  const location = useLocation();
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const [children, setChildren] = useState('');
  const [rooms, setRooms] = useState('');
  const [hotelDetail, setHotelDetail] = useState([]); 
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchHotels = async (
    destination,
    checkInDate,
    checkOutDate,
    guests,
    children,
    rooms
  ) => {
    try {
      const response = await axios.get('http://localhost:4001/hotels/search', {
        params: {
          destination,
          checkInDate,
          checkOutDate,
          guests,
          children,
          rooms,
        },
      });
      console.log(response.data, "response fetchHotels");
      setHotelDetail(response.data); 
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setError('Failed to fetch hotels.');
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const destinationParam = queryParams.get('destination') || '';
    const checkInDateParam = queryParams.get('checkInDate') || '';
    const checkOutDateParam = queryParams.get('checkOutDate') || '';
    const guestsParam = queryParams.get('guests') || '';
    const childrenParam = queryParams.get('children') || '';
    const roomsParam = queryParams.get('rooms') || '';

    setDestination(destinationParam);
    setCheckInDate(checkInDateParam);
    setCheckOutDate(checkOutDateParam);
    setGuests(guestsParam);
    setChildren(childrenParam);
    setRooms(roomsParam);

    fetchHotels(destinationParam, checkInDateParam, checkOutDateParam, guestsParam, childrenParam, roomsParam);
  }, [location.search]);

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
    } else {
      setSuggestions([]);
    }
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

  const handleSuggestionClick = (suggestion) => {
    setDestination(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (!destination || !checkInDate || !checkOutDate || !guests || !rooms) {
      message.warning('Please fill in all the required fields: destination, check-in date, check-out date, guests, and rooms.');
      return;  
    }
    setError(''); 
    fetchHotels(destination, checkInDate, checkOutDate, guests, children, rooms); 
  };

  return (
    <React.Fragment>
      <div className="relative pl-5 pr-5 lg:pl-7 lg:pr-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4 mt-6">
        <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/2 lg:w-1/4"
        type="search"
        placeholder="Search destination..."
        value={destination}
        onClick={fetchAllLocations}
        onChange={handleLocationChange}
      />
      <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/2 lg:w-1/4"
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/2 lg:w-1/4"
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/4 lg:w-1/8"
        type="number"
        placeholder="Guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/4 lg:w-1/8"
        type="number"
        placeholder="Children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
      />
      <input
        className="flex-1 h-12 rounded-md p-2 border border-gray-300 w-full sm:w-1/4 lg:w-1/8"
        type="number"
        placeholder="Rooms"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />
      <button
        className="bg-blue-700 h-12 rounded-md text-white w-full sm:w-1/4 lg:w-1/8"
        onClick={handleSearch}
      >
        Search
      </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 mt-12 md:mt-14 lg:mt-14 w-[90%] md:w-[26%] lg:w-[26%] bg-white border border-gray-300 rounded-md shadow-lg">
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
      </div>
      <div className="p-4 pl-5 pr-5 lg:pl-7 lg:pr-8">
        {hotelDetail.length ? (
          hotelDetail.map((hotel, index) => (
            <HotelCard key={index} 
              imgUrl={hotel.image} 
              name={hotel.name} 
              streetAddress={hotel.streetAddress} 
              location={hotel.location} 
              description={hotel.description} 
              rooms={hotel.rooms}
              amenities={Array.isArray(hotel.amenities) ? hotel.amenities : [hotel.amenities]} 
              starRating={hotel.starRating}  
              isCreditCardNeed={hotel.isCreditCardNeed}
            />
          ))
        ) : (
          <div>No hotels found</div>
        )}
      </div>
    </React.Fragment>
  );
};
