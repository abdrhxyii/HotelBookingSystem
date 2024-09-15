import React, { useState, useEffect } from 'react';
import { PlusOutlined, EditOutlined, DeleteOutlined, MinusOutlined } from '@ant-design/icons';
import { Select, Button } from 'antd';
import { message } from 'antd';
import axios from 'axios';

const RoomsTab = ({ hotels }) => {
    const [showAddRoom, setShowAddRoom] = useState(false);
    const [newRoom, setNewRoom] = useState({
      roomType: '',
      occupancy: '',
      beds: '',
      childrenAllowed: "",
      pricePerNight: '',
      hotelId: '',
    });
    const [rooms, setRooms] = useState([]);
    const [editingRoom, setEditingRoom] = useState(null);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('http://localhost:4001/rooms');
            setRooms(response.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const handleAddRoom = async () => {
        try {
            await axios.post('http://localhost:4001/rooms', newRoom);
            setShowAddRoom(false);
            setNewRoom({
                roomType: '',
                occupancy: '',
                beds: '',
                childrenAllowed: "",
                pricePerNight: '',
                hotelId: '',
            });
            fetchRooms();
            message.success('Rooms added successfully');
        } catch (error) {
            console.error('Error adding room:', error);
        }
    };

    const handleDeleteRoom = async (id) => {
      const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:4001/rooms/${id}`, {
              headers: {
                'Authorization': `Bearer ${token}`, 
              }
            });
            fetchRooms();
            message.success('Rooms deleted successfully');
        } catch (error) {
            console.error('Error deleting room:', error);
        }
    };

    const handleEditRoom = (room) => {
          setNewRoom({
            ...room,
            hotelId: room.hotel?.id || '', 
        })
        setEditingRoom(room.id);
        setShowAddRoom(true);
    };

    const handleUpdateRoom = async () => {
        try {
            await axios.put(`http://localhost:4001/rooms/${editingRoom}`, newRoom);
            setEditingRoom(null);
            setShowAddRoom(false);
            setNewRoom({
                roomType: '',
                occupancy: '',
                beds: '',
                childrenAllowed: "",
                pricePerNight: '',
                hotelId: '',
            });
            fetchRooms();
            message.success('Rooms updated successfully');
        } catch (error) {
            console.error('Error updating room:', error);
        }
    };

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Rooms</h2>
        {showAddRoom ? 
            <button
              onClick={() => setShowAddRoom(false)}
              className="mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center"
              >
              <MinusOutlined className="mr-2" /> Close
            </button> 
            :
            <button
              onClick={() => setShowAddRoom(true)}
              className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center"
            >
            <PlusOutlined className="mr-2" /> Add Property
          </button>
        }

        {showAddRoom && (
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h3 className="text-xl font-bold mb-2">{editingRoom ? 'Edit Room' : 'New Room'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Room Type"
                className="border p-2 rounded-md"
                value={newRoom.roomType}
                onChange={(e) => setNewRoom({ ...newRoom, roomType: e.target.value })}
              />
              <input
                type="number"
                placeholder="Occupancy"
                className="border p-2 rounded-md"
                value={newRoom.occupancy}
                onChange={(e) => setNewRoom({ ...newRoom, occupancy: e.target.value })}
              />
              <input
                type="number"
                placeholder="Beds"
                className="border p-2 rounded-md"
                value={newRoom.beds}
                onChange={(e) => setNewRoom({ ...newRoom, beds: e.target.value })}
              />
              <input
                type="number"
                placeholder="Children"
                className="border p-2 rounded-md"
                value={newRoom.childrenAllowed}
                onChange={(e) => setNewRoom({ ...newRoom, childrenAllowed: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price per Night"
                className="border p-2 rounded-md"
                value={newRoom.pricePerNight}
                onChange={(e) => setNewRoom({ ...newRoom, pricePerNight: e.target.value })}
              />
              <Select
                placeholder="Select Hotel"
                value={newRoom.hotelId} 
                onChange={(value) => setNewRoom({ ...newRoom, hotelId: value })}
                options={hotels.map((hotel) => ({ value: hotel.id, label: hotel.name }))} 
              />
            </div>
            <button
              onClick={editingRoom ? handleUpdateRoom : handleAddRoom}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              {editingRoom ? 'Update Room' : 'Save Room'}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md rounded-md p-4 relative">
              <h3 className="text-xl font-bold">{room.roomType}</h3>
              <p className="text-gray-600">Hotel: {room.hotel.name}</p>
              <p className="text-gray-500">Occupancy: {room.occupancy}</p>
              <p className="text-gray-500">Beds: {room.beds}</p>
              <p className="text-gray-500">Price: ${room.pricePerNight}/night</p>
              <p className="text-gray-500">Children Allowed: {room.childrenAllowed}</p>
              <div className="absolute top-4 right-4 space-x-2">
                <Button
                  icon={<EditOutlined />}
                  onClick={() => handleEditRoom(room)}
                />
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDeleteRoom(room.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default RoomsTab;
