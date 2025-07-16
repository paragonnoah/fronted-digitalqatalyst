import React from 'react';

const EditModal = ({ user, onSave, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded shadow-lg w-1/3">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => onSave({ ...user, name: e.target.value })}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => onSave({ ...user, email: e.target.value })}
        className="p-2 border rounded w-full mb-2"
      />
      <select
        multiple
        value={user.role}
        onChange={(e) => onSave({ ...user, role: Array.from(e.target.selectedOptions, option => option.value) })}
        className="p-2 border rounded w-full mb-2"
      >
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="User">User</option>
      </select>
      <div className="flex justify-end space-x-2">
        <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
        <button onClick={() => onSave(user)} className="bg-blue-500 text-white p-2 rounded">Save</button>
      </div>
    </div>
  </div>
);

export default EditModal;