// src/components/UserProfile.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const navigate = useNavigate();

  const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/Auth/Home/Home')
  };

  return (
    <ProfileContainer>
      <Sidebar>
        <SidebarHeader>User Menu</SidebarHeader>
        <SidebarItem onClick={() => setActiveSection('profile')}>Profile</SidebarItem>
        {/* <SidebarItem onClick={() => setActiveSection('settings')}>Settings</SidebarItem> */}
        <SidebarItem onClick={handleLogout}>Logout</SidebarItem>
      </Sidebar>
      <ProfileDetails>
        {activeSection === 'profile' && (
          <>
            <h2>User Profile</h2>
            <DetailItem>
              <strong>Username:</strong> {user.username}
            </DetailItem>
            <DetailItem>
              <strong>Email:</strong> {user.email}
            </DetailItem>
          </>
        )}
        {/* {activeSection === 'settings' && (
          <h2>Settings Section</h2>
          // Add your settings content here
        )} */}
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default UserProfile;

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f9f9f9;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.h3`
  margin-bottom: 20px;
  color: #ecf0f1;
`;

const SidebarItem = styled.div`
  margin: 15px 0;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DetailItem = styled.div`
  margin: 15px 0;
  font-size: 1.1em;
  color: #34495e;
`;
