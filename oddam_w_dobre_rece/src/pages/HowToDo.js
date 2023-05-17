import React from 'react';
import styled from 'styled-components';

const HowToDoContainer = styled.div`
  width: 100vw;
  height: 624px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Component = styled.div`
  flex: 1;
  margin: 1em;
  background-color: #f0f0f0; 
  width: 90%;

  @media (max-width: 768px) {
    height: auto;
    margin: 1em auto;
  }
`;

const HowToDo = () => {
    return (
        <HowToDoContainer>
            <Component>
                {'wiersz 1'}
            </Component>
            <Component>
                {'wiersz 2'}
            </Component>
            <Component>
                {'wiwersz 3'}
            </Component>
        </HowToDoContainer>
    );
};

export default HowToDo;
