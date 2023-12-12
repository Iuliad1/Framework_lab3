// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: pink;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  color: black;
`;

const NavLinks = styled.nav`
  margin-top: 15px;

  a {
    margin: 0 10px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  // Define the handleAddToFavorite function
  const handleAddToFavorite = () => {
    // Add your logic here to handle adding to favorites
    console.log('Adding to favorites...');
  };

  return (
    <StyledHeader>
      <Title>My mini application</Title>
      <NavLinks>
        <Link to="/">Home</Link>
        {/* Add an onClick event to call handleAddToFavorite */}
        <Link to="/saved" onClick={handleAddToFavorite}>
          Favorites
        </Link>
        <Link to="/create-task">Create Task</Link>
      </NavLinks>
    </StyledHeader>
  );
};

export default Header;

