import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Add your signup logic here
  };
  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        
        <InputContainer>
          <FaUser className="icon" />
          <Input type="text" placeholder="Email"  value={formData.username}
            onChange={handleChange} required/>
        </InputContainer>
        
        <InputContainer>
          <FaLock className="icon" />
          <Input type="password" placeholder="Password"  value={formData.username}
            onChange={handleChange} required/>
        </InputContainer>
        
        <Button type="submit">Login</Button>
        <FooterText>Don't have an account? <Link to="/Auth/Signup/Signup">Sign up</Link></FooterText>
      </Form>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 1rem;
`;

const Form = styled.form`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  width: 85%;
  margin-bottom: 1.5rem;

  .icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #888;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
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

const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
