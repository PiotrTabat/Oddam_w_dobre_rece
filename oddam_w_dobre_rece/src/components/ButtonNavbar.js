import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  font-size: 20px;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
`;

const Button = styled.button`
  margin-bottom: 20px;
  margin-right: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const ButtonNavbar = () => {
    return (
        <NavbarContainer>
            <Button><StyledLink to='/'>Start</StyledLink></Button>
            <Button><StyledLink to='/simplesteps'>O co chodzi</StyledLink></Button>
            <Button><StyledLink to='/aboutus'>O nas</StyledLink></Button>
            <Button><StyledLink to='/whomwehelp'>Fundacja i organizacje</StyledLink></Button>
            <Button><StyledLink to='/contact'>Kontakt</StyledLink></Button>
        </NavbarContainer>
    );
}

export default ButtonNavbar;
