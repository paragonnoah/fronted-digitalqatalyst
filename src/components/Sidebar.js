import React from 'react';

const Sidebar = () => (
  <div className="w-64 bg-blue-800 text-white p-4 hidden md:block">
    <h2 className="text-2xl font-semibold mb-6">digital qatalyst</h2>
    <nav>
      <ul className="space-y-2">
        <li><button className="w-full text-left hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Dashboard</button></li>
        <li><button className="w-full text-left hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Users</button></li>
        <li><button className="w-full text-left hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Settings</button></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;