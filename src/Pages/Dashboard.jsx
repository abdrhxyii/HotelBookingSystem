import React, { useState, useEffect } from 'react';
import PropertiesTab from '../Components/Admin/PropertiesTab';
import RoomsTab from '../Components/Admin/RoomsTab';
import Sidebar from '../Components/Admin/Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const [hotels, setHotels] = useState([]);

  const listHotels = async () => {
    try {
      const res = await axios.get("http://localhost:4001/hotels/all");
      setHotels(res.data);  
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  useEffect(() => {
    listHotels();
  }, []); 

  return (
    <div className="min-h-screen flex bg-gray-100">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-6">
            {activeTab === 'properties' ? (
            <PropertiesTab hotels={hotels} setHotels={setHotels} />
            ) : (
            <RoomsTab hotels={hotels} />
            )}
        </div>
    </div>
  );
};

export default Dashboard;
