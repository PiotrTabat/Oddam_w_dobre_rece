import React from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';




const ButtonContainer = styled.div`
 display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem;
  font-size: 16px;
`;

const WhomButtonLeft = styled.button`
  background: none;
  border: black 1px solid;
  padding: 1.1rem 2rem;
  color: #000000;
  cursor: pointer;
  gap : 1rem;
`;
const WhomButtonCenter = styled.button`
  background: none;
  border: black 1px solid;
  padding: 0.4rem 2rem;
  color: #000000;
  cursor: pointer;
`;
const WhomButtonRight = styled.button`
  background: none;
  border: black 1px solid;
  padding: 0.4rem 3rem;
  color: #000000;
  cursor: pointer;
`;


const WhomButtons = ({ onClick }) => {
    return (
        <Element name="logout" className="element">
            <ButtonContainer>
                <WhomButtonLeft onClick={() => onClick('fundations')}>Fundacjom</WhomButtonLeft>
                <WhomButtonCenter onClick={() => onClick('organizations')}>Organizacjom <br/> pozarządowym</WhomButtonCenter>
                <WhomButtonRight onClick={() => onClick('local')}>Lokalnym <br/> zbiórkom</WhomButtonRight>
            </ButtonContainer>
        </Element>
    )
};
export default WhomButtons;
