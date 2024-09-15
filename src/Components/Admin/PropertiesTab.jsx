import React, { useState, useEffect } from 'react';
import { PlusOutlined, EditOutlined, DeleteOutlined, MinusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Button } from 'antd';
import { message } from 'antd';

const PropertiesTab = ({ hotels, setHotels }) => {
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [newHotel, setNewHotel] = useState({
    image: '',
    name: '',
    location: '',
    description: '',
    starRating: '',
    amenities: '',
    streetAddress: '',
    isCreditCardNeed: false,
  });
  const [editingHotelIndex, setEditingHotelIndex] = useState(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:4001/hotels/all');
      setHotels(response.data);
    } catch (error) {
      message.error('Failed to fetch hotels');
    }
  };

  const addProperty = async () => {
    try {
      if (editingHotelIndex !== null) {
        await axios.put(`http://localhost:4001/hotels/${hotels[editingHotelIndex].id}`, newHotel);
        message.success('Hotel updated successfully');
      } else {
        await axios.post('http://localhost:4001/hotels', newHotel);
        message.success('Hotel added successfully');
      }
      setShowAddProperty(false);
      setNewHotel({
        image: '',
        name: '',
        location: '',
        description: '',
        starRating: '',
        amenities: '',
        streetAddress: '',
        isCreditCardNeed: false,
      });
      setEditingHotelIndex(null);
      fetchHotels(); 
    } catch (error) {
      message.error('Failed to save hotel');
    }
  };

  const deleteHotel = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:4001/hotels/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      message.success('Hotel deleted successfully');
      fetchHotels(); 
    } catch (error) {
      message.error('Failed to delete hotel');
    }
  };

  const startEditingHotel = (index) => {
    setNewHotel(hotels[index]);
    setShowAddProperty(true);
    setEditingHotelIndex(index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Properties</h2>
      {showAddProperty ? 
          <button
            onClick={() => setShowAddProperty(false)}
            className="mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center"
            >
            <MinusOutlined className="mr-2" /> Close
          </button> 
          :
          <button
            onClick={() => setShowAddProperty(true)}
            className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center"
          >
          <PlusOutlined className="mr-2" /> Add Property
        </button>
      }

      {showAddProperty && (
        <div className="bg-white p-4 shadow-md rounded-md mb-6">
          <h3 className="text-xl font-bold mb-2">{editingHotelIndex !== null ? 'Edit Property' : 'New Property'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded-md"
              value={newHotel.image}
              onChange={(e) => setNewHotel({ ...newHotel, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded-md"
              value={newHotel.name}
              onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-2 rounded-md"
              value={newHotel.location}
              onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-2 rounded-md"
              value={newHotel.description}
              onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })}
            />
            <input
              type="number"
              placeholder="Star Rating"
              className="border p-2 rounded-md"
              value={newHotel.starRating}
              onChange={(e) => setNewHotel({ ...newHotel, starRating: e.target.value })}
            />
            <input
              type="text"
              placeholder="Amenities (comma separated)"
              className="border p-2 rounded-md"
              value={newHotel.amenities}
              onChange={(e) => setNewHotel({ ...newHotel, amenities: e.target.value })}
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border p-2 rounded-md"
              value={newHotel.streetAddress}
              onChange={(e) => setNewHotel({ ...newHotel, streetAddress: e.target.value })}
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newHotel.isCreditCardNeed}
                onChange={(e) => setNewHotel({ ...newHotel, isCreditCardNeed: e.target.checked })}
              />
              <span>Credit Card Required</span>
            </label>
          </div>
          <button
            onClick={addProperty}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            {editingHotelIndex !== null ? 'Update Property' : 'Save Property'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4 relative">
            <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.description}</p>
            <p className="text-gray-500">Location: {hotel.location}</p>
            <p className="text-yellow-500">Rating: {hotel.starRating} ★</p>
            <p className="text-gray-500">Address: {hotel.streetAddress}</p>
            <div className="absolute top-4 right-4 space-x-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => startEditingHotel(index)}
              />
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => deleteHotel(hotel.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesTab;