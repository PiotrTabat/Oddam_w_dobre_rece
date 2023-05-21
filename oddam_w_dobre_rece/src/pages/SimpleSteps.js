import React from 'react';
import styled from 'styled-components';
import decorationImage from '../assets/Decoration.svg';
import componentIcon1 from '../assets/Icon-1.svg';
import competitionImage2 from '../assets/Icon-2.svg';
import competitionImage3 from '../assets/Icon-3.svg';
import competitionImage4 from '../assets/Icon-4.svg';
import { Element, scroller } from 'react-scroll';


const SimpleStepsContainer = styled.div`
  width: 100%;
  height: 624px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    margin: 1em auto;
  }
`;

const SimpleComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F0F1F1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ComponentIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const ComponentTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin: 1rem 0;
`;

const ComponentText = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`;

const Separator = styled.div`
  width: 30px;
  height: 2px;
  background-color: #3C3C3C;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const DecorationImage = styled.img`
  width: 15rem;
  margin-bottom: 2rem;
`;

const SimpleStepsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

const SimpleStepsButton = styled.button`
  padding: 1rem 4rem;
  background: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 300;
  border: 0.75px solid #3C3C3C;
`;

const handleButtonClick = () => {
    scroller.scrollTo('simpleSteps', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
};

const SimpleSteps = () => {
    return (
        <Element name="simpleSteps" className="element">
            <SimpleStepsContainer>
                <Title>Wystarczą 4 proste kroki</Title>
                <DecorationImage src={decorationImage} alt="Decoration"/>
                <SimpleComponentContainer>
                    <ComponentContainer>
                        <ComponentIcon src={componentIcon1} alt="Icon 1"/>
                        <ComponentTitle>Wybierz rzeczy</ComponentTitle>
                        <Separator/>
                        <ComponentText>ubrania, zabawki, <br/> sprzęt i inne</ComponentText>
                    </ComponentContainer>
                    <ComponentContainer>
                        <ComponentIcon src={competitionImage2} alt="Icon 2"/>
                        <ComponentTitle>Spakuj je</ComponentTitle>
                        <Separator/>
                        <ComponentText>skorzystaj z <br/> worków na śmieci</ComponentText>
                    </ComponentContainer>
                    <ComponentContainer>
                        <ComponentIcon src={competitionImage3} alt="Icon 3"/>
                        <ComponentTitle>Zdecyduj komu <br/> chcesz pomóc</ComponentTitle>
                        <Separator/>
                        <ComponentText>wybierz zaufane <br/> miejsce</ComponentText>
                    </ComponentContainer>
                    <ComponentContainer>
                        <ComponentIcon src={competitionImage4} alt="Icon 4"/>
                        <ComponentTitle>Zamów kuriera</ComponentTitle>
                        <Separator/>
                        <ComponentText>kurier przyjedzie <br/> w dogodnym terminie</ComponentText>
                    </ComponentContainer>
                </SimpleComponentContainer>
                <SimpleStepsButtonContainer>
                    <SimpleStepsButton onClick={handleButtonClick}>ODDAJ <br/> RZECZY</SimpleStepsButton>
                </SimpleStepsButtonContainer>
            </SimpleStepsContainer>
        </Element>
    );
};

export default SimpleSteps;
