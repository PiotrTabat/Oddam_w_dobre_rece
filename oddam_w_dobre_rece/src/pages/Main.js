import React from 'react';
import styled from 'styled-components';
import Home from "./Home";
import ThreeColumns from "./ThreeColumns";
import HowToDo from "./HowToDo";
import AboutUs from "./AboutUs";
import WhomWeHelp from "./WhomWeHelp";
import Contact from "./Contact";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background: #FFFFFF;
  opacity: 1;
`;


const Main = () => {
    return (
        <MainContainer>
            <Home />
            <ThreeColumns />
            <HowToDo />
            <AboutUs />
            <WhomWeHelp />
            <Contact />
        </MainContainer>
    );
};

export default Main;
