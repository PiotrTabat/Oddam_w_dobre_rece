import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Home-Hero-Image.jpg';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat -400px center;
background-size: cover;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #ffffff;
`;

const Home = () => {
    return (
        <HomeContainer>
            <LeftContainer />
            <RightContainer />
        </HomeContainer>
    );
};

export default Home;
