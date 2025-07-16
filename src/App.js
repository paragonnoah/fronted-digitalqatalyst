import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import UserTable from './components/UserTable';
import FilterBar from './components/FilterBar';
import EditModal from './components/EditModal';
import Pagination from './components/Pagination';
import usersData from './data/users.json';

function App() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 10;

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) setCurrentPage(parseInt(savedPage));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const filteredUsers = users.filter(user =>
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterRole === '' || user.role.includes(filterRole)) &&
    (filterStatus === '' || user.status === filterStatus)
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleEdit = (user) => setSelectedUser(user);
  const handleSave = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setSelectedUser(null);
  };
  const handleClose = () => setSelectedUser(null);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <FilterBar
          searchTerm={searchTerm}
          filterRole={filterRole}
          filterStatus={filterStatus}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          onRoleChange={(e) => setFilterRole(e.target.value)}
          onStatusChange={(e) => setFilterStatus(e.target.value)}
        />
        <UserTable users={currentUsers} onEdit={handleEdit} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        {selectedUser && <EditModal user={selectedUser} onSave={handleSave} onClose={handleClose} />}
      </div>
    </div>
  );
}

export default App;