import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleAdmin=()=>{
        navigate('/Dashboard/Admin/Admin')
    }
    const handleUser=()=>{
        navigate('/Dashboard/User/User')
    }
    
  return (
    <div>
        <ButtonContainer>
            <Button type="submit" onClick={handleAdmin}>Admin</Button>
            <Button type="submit" onClick={handleUser}>User</Button>
        </ButtonContainer>
    </div>
  );
};

export default Dashboard;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
