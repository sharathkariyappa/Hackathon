// src/components/Dashboard/UserManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserManagement = () => {
  const [activeUserCount, setActiveUserCount] = useState(0);
  const [newSignupCount, setNewSignupCount] = useState(0);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;

      // Assuming IDs less than 5 are "Active Users" and others are "New Signups"
      const activeUsers = users.filter(user => user.id < 5);
      const newSignups = users.filter(user => user.id >= 5);

      setActiveUserCount(activeUsers.length);
      setNewSignupCount(newSignups.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <UserContainer>
      <h2>Admin Dashboard</h2>
      <CountSection>
        <CountBox>
          <h3>Active Users</h3>
          <p>{activeUserCount}</p>
        </CountBox>
        <CountBox>
          <h3>New Signups</h3>
          <p>{newSignupCount}</p>
        </CountBox>
      </CountSection>
    </UserContainer>
  );
};

export default UserManagement;

const UserContainer = styled.div`
  margin-top: 1rem;
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const CountSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const CountBox = styled.div`
  padding: 1rem;
  background: #f7f7f7;
  border-radius: 8px;
  width: 150px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007acc;
  }
`;
