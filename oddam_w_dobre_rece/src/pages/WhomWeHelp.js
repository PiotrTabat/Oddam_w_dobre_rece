import React from 'react';
import styled from 'styled-components';
import decorationImage from "../assets/Decoration.svg";

const WhomWeHelpContainer = styled.div`
  width: 100%;
  max-width: 1344px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Up = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Down = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleComponent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const DecorationImage = styled.img`
  width: 15rem;
  height: 2rem;
  margin-bottom: 2rem;

`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const WhomComponent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const WhomWeHelp = () => {
    return (
        <WhomWeHelpContainer>
            <Up>
                <TitleComponent>
                    <Title>Komu pomagamy?</Title>
                    <DecorationImage src={decorationImage} alt="Decoration"/>
                    <ButtonContainer>
                        <MenuButton>Fundacjom</MenuButton>
                        <MenuButton>Organizacjom<br/>pozarządowym</MenuButton>
                        <MenuButton>Lokalnym<br/>zbiórkom</MenuButton>
                    </ButtonContainer>
                </TitleComponent>
            </Up>
            <Down>
                <WhomComponent>{'Fundacje'}</WhomComponent>
            </Down>
        </WhomWeHelpContainer>
    );
};

export default WhomWeHelp;
