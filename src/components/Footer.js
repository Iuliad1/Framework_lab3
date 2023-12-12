import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CreatorInfo = styled.p`
  margin: 0;
`;

const AdditionalLinks = styled.nav`
  margin-top: 5px;

  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <CreatorInfo>Created by Dudcovscaia Iulia - Grupa IA2101</CreatorInfo>
       </StyledFooter>
  );
};

export default Footer;
