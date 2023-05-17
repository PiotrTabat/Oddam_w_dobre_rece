import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/3-Columns-Background.jpg';

const ThreeColumnsContainer = styled.div`
  width: 100vw;
  height: 384px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: url(${backgroundImage}) no-repeat center;
`;

const Column = styled.div`
  flex: 1 1 30%;
  margin: 1em;
  background-color: #f0f0f0;
  height: 80%;


  @media (max-width: 768px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const ThreeColumns = () => {
    return (
        <ThreeColumnsContainer>
            <Column>
                {'kolumna 1'}
            </Column>
            <Column>
                {'kolmna 2'}
            </Column>
            <Column>
                {'kolmna 3'}
            </Column>
        </ThreeColumnsContainer>
    );
};

export default ThreeColumns;
