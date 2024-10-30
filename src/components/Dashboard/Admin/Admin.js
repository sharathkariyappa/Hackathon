import React from 'react'
// import OverviewPanel from '../OverviewPanel'
import styled from 'styled-components';
import UserManagement from '../UserManagement'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const handleCrud = ()=>{
    navigate('/Dashboard/Crud')
  }
  const handleGraph = ()=>{
    navigate('/Dashboard/Charts')
  }

  return (
    <>
    <div>
      <UserManagement />
    </div>
    <ButtonContainer>
      <Button type="submit" onClick={handleCrud}> Manage Users</Button>
      <Button type="submit" onClick={handleGraph}> View Analytics</Button>
    </ButtonContainer>
    </>
  )
}

export default Admin

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