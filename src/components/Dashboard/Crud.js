// src/components/Dashboard/UserManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Crud = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch Users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // CRUD Handlers
  const handleAddUser = () => {
    const newUser = { id: users.length + 1, name: "New User", email: "newuser@example.com" };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, name: `${user.name} (edited)` } : user));
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <UserContainer>
      <h2>User Management</h2>
      <AddUserButton onClick={handleAddUser}>Add New User</AddUserButton>
      <UserTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <ActionButton onClick={() => handleEditUser(user.id)}>Edit</ActionButton>
                <ActionButton onClick={() => handleDeleteUser(user.id)}>Delete</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </UserTable>
    </UserContainer>
  );
};

export default Crud;

const UserContainer = styled.div`
  margin-top: 1rem;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #2c3e50;
  }
`;

const AddUserButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const ActionButton = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #d35400;
  }
`;
