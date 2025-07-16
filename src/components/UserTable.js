import React from 'react';

const UserTable = ({ users, onEdit }) => (
  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
    <table className="w-full text-left">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="p-4">Name</th>
          <th className="p-4">Email</th>
          <th className="p-4">Role</th>
          <th className="p-4">Status</th>
          <th className="p-4">Last Active</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="table-row border-b">
            <td className="p-4">{user.name}</td>
            <td className="p-4">{user.email}</td>
            <td className="p-4">{user.role.join(', ')}</td>
            <td className="p-4">{user.status}</td>
            <td className="p-4">{user.lastActive}</td>
            <td className="p-4"><button onClick={() => onEdit(user)} className="btn text-sm">Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;