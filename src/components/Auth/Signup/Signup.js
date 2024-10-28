import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';

const Signup = () => {
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
    <SignupContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        
        <InputContainer>
          <FaUserAlt className="icon" />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </InputContainer>

        <InputContainer>
          <FaEnvelope className="icon" />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputContainer>

        <InputContainer>
          <FaLock className="icon" />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputContainer>

        <Button type="submit">Create Account</Button>
        <FooterText>Already have an account? <Link to="/Auth/Login/Login">Login</Link></FooterText>
      </Form>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  background: white;
  padding: 2rem 1.5rem; /* Adjust padding for the left icon */
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; /* Set max-width for form container */
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  position: relative;
  width: 85%; /* Ensure it takes full width of the form */
  margin-bottom: 1.5rem;
  
  .icon {
    position: absolute;
    top: 50%;
    left: 10px; /* Adjust padding to fit inside container */
    transform: translateY(-50%);
    color: #888;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 1.5rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
