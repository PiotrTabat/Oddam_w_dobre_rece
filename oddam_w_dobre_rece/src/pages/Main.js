import React from 'react';
import styled from 'styled-components';
import Home from "./Home";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhomWeHelp from "./WhomWeHelp";
import Contact from "./Contact";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: #FFFFFF;
  opacity: 1;
`;


const Main = () => {
    return (
        <MainContainer>
            <Home />
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <WhomWeHelp />
            <Contact />
        </MainContainer>
    );
};

export default Main;
