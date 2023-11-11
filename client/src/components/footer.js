// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
font-size: 18px;
margin: 20px;
width: 100%;
height: 200px;
background-color: black;
display: flex;
align-items: center;
color: white;
text-decoration: none;
justify-content: center;

`;

 export const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} NorthIndianRecipes.net </p>
    </FooterWrapper>
  );
};


