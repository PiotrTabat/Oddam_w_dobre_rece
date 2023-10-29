import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
// import {supabase} from '../helper/supabaseClient';
import {useEffect, useState} from "react";


const LoggedInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  font-size: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 10px;
  margin-right: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const GreetingContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const UserContainer = styled.div`
  margin-bottom: 10px;
  margin-right: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: #3b3b3b;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const LoggedInNavigation = ({user}) => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        if (user) {
            setGreeting('Cześć');
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            window.location.reload();
        } catch (error) {
            alert(error.error_description || error.message);
        }
    }

    return (
        <LoggedInContainer>
            <GreetingContainer>
                {greeting}
            </GreetingContainer>
            <UserContainer>
                {user?.email}
            </UserContainer>
            <StyledLink to="/logout" onClick={handleLogout}>Wyloguj</StyledLink>
        </LoggedInContainer>
    );
};

export default LoggedInNavigation;