import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem;
  font-size: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
`;

const Button = styled.button`
  background: ${({$isActive}) => ($isActive ? '#B0AEAEFF' : 'none')};
  border: black 1px solid;
  padding: 1rem 2rem;
  color: #000000;
  cursor: pointer;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 14px;
    margin-bottom: 1rem;
  }
`;

const WhomButtonLeft = styled(Button)``;
const WhomButtonCenter = styled(Button)``;
const WhomButtonRight = styled(Button)``;

const WhomButtons = ({ onClick, activeButton }) => {
    return (
        <Element name="whombuttons" className="element">
            <ButtonContainer>
                <WhomButtonLeft
                    onClick={() => onClick('fundations')}
                    $isActive={activeButton === 'fundations'}
                >
                    Fundacjom
                </WhomButtonLeft>
                <WhomButtonCenter
                    onClick={() => onClick('organizations')}
                    $isActive={activeButton === 'organizations'}
                >
                    Organizacjom <br /> pozarządowym
                </WhomButtonCenter>
                <WhomButtonRight
                    onClick={() => onClick('local')}
                    $isActive={activeButton === 'local'}
                >
                    Lokalnym <br /> zbiórkom
                </WhomButtonRight>
            </ButtonContainer>
        </Element>
    );
};

export default WhomButtons;
