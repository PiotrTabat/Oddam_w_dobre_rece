import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Home-Hero-Image.jpg';
import decorationImage from '../assets/Decoration.svg';
import { Element, scroller } from 'react-scroll';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    margin: 1em auto;
  }
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #3C3C3C;
`;

const TopNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  margin-bottom: 10px;
  margin-right: 1rem;
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
`;

const DecorationCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DecorationImage = styled.img`
  margin-top: 20px;
`;

const CenteredDecorationImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const DecorationText = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 50px;
  font-weight: 400;
  margin-top: 180px;
  margin-bottom: 1em;
`;

const DecorationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
  gap: 10px;
  font-size: 20px;
`;

const DecorationButtonLeft = styled.button`
  margin-top: 60px;
  margin-bottom: 20px;
  margin-right: 1rem;
  background: none;
  border: 1px solid black;
  padding: 1rem 2.5rem;
  color: #000000;
  cursor: pointer;
`;

const DecorationButtonRight = styled.button`
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 1rem;
  background: none;
  padding: 1rem;
  color: #000000;
  cursor: pointer;
  border: 1px solid black;
`;

const handleStartButtonClick = () => {
    scroller.scrollTo('home', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
};
const handleSimpleStepsButtonClick = () => {
    scroller.scrollTo('simpleSteps', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
};
const handleAboutUsButtonClick = () => {
    scroller.scrollTo('aboutUs', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}
const handleWhomWeHelpButtonClick = () => {
    scroller.scrollTo('whomWeHelp', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}

const handleContactButtonClick = () => {
    scroller.scrollTo('contact', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}



const Home = () => {
    return (
        <Element name="home" className="element">
            <HomeContainer>
                <LeftContainer />
                <RightContainer>
                    <TopNavigation>
                        <Button>Zaloguj</Button>
                        <Button>Załóż konto</Button>
                    </TopNavigation>
                    <ButtonContainer>
                        <Button onClick={handleStartButtonClick}>Start</Button>
                        <Button onClick={handleSimpleStepsButtonClick}>O co chodzi</Button>
                        <Button onClick={handleAboutUsButtonClick}>O nas</Button>
                        <Button onClick={handleWhomWeHelpButtonClick}>Fundacja i organizacje</Button>
                        <Button onClick={handleContactButtonClick}>Kontakt</Button>
                    </ButtonContainer>
                    <DecorationCenter>
                        <DecorationText>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</DecorationText>
                        <CenteredDecorationImage>
                            <DecorationImage src={decorationImage} alt="Decoration"/>
                        </CenteredDecorationImage>
                        <DecorationButtonContainer>
                            <DecorationButtonLeft>ODDAJ <br/> RZECZY</DecorationButtonLeft>
                            <DecorationButtonRight>ZORGANIZUJ <br/> ZBIÓRKĘ</DecorationButtonRight>
                        </DecorationButtonContainer>
                    </DecorationCenter>
                </RightContainer>
            </HomeContainer>
        </Element>
    );
};

export default Home;
