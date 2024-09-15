import React from 'react'

const Sidebar = ({ activeTab, setActiveTab }) => (
    <div className="w-64 bg-blue-700 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <nav className="flex flex-col p-4 space-y-4">
        <button
          onClick={() => setActiveTab('properties')}
          className={`text-left p-2 rounded-md ${activeTab === 'properties' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
        >
          Properties
        </button>
        <button
          onClick={() => setActiveTab('rooms')}
          className={`text-left p-2 rounded-md ${activeTab === 'rooms' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
        >
          Rooms
        </button>
      </nav>
    </div>
  );
  

export default Sidebar