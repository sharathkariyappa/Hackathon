import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <Title>Welcome to the Admin Dashboard</Title>
        <Subtitle>Manage users efficiently with role-based access control</Subtitle>
        <Description>
          This platform provides an intuitive and powerful dashboard where admins can manage users, monitor activities, and visualize data through interactive charts. Users can view their profile and statistics seamlessly.
        </Description>
        
        <ButtonContainer>
          {/* <StyledLink to="/dashboard">Go to Dashboard</StyledLink> */}
          <StyledLink to="/Auth/Login/Login" secondary>Login</StyledLink>
          <StyledLink to="/Auth/Signup/Signup" secondary>Sign Up</StyledLink>
        </ButtonContainer>
      </Content>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: ${(props) => (props.secondary ? '#007bff' : '#fff')};
  background-color: ${(props) => (props.secondary ? 'transparent' : '#007bff')};
  border: ${(props) => (props.secondary ? '2px solid #007bff' : 'none')};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#007bff' : '#0056b3')};
    color: #fff;
  }
`;
