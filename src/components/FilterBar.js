import React from 'react';

const FilterBar = ({ searchTerm, filterRole, filterStatus, onSearchChange, onRoleChange, onStatusChange }) => (
  <div className="mb-4 flex space-x-4">
    <input
      type="text"
      placeholder="Search by Name or Email..."
      value={searchTerm}
      onChange={onSearchChange}
      className="p-2 border rounded"
    />
    <select value={filterRole} onChange={onRoleChange} className="p-2 border rounded">
      <option value="">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="Editor">Editor</option>
      <option value="User">User</option>
    </select>
    <select value={filterStatus} onChange={onStatusChange} className="p-2 border rounded">
      <option value="">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
      <option value="Invited">Invited</option>
    </select>
  </div>
);

export default FilterBar;