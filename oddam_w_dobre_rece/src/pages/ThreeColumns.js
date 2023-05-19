import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/3-Columns-Background.jpg';

const ThreeColumnsContainer = styled.div`
  width: 100vw;
  height: 384px;
  background: url(${backgroundImage}) no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    margin: 1em auto;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Column = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 300;
  color: #5E5322;
  text-align: center;
  padding: 10px;
  word-wrap: break-word;
`;

const Number = styled.div`
  font-size: 90px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 10px;
    font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Merriweather', serif;
  line-height: 28px;
  word-wrap: break-word;
`;

const ThreeColumns = () => {
    return (
        <ThreeColumnsContainer>
            <ColumnContainer>
                <Column>
                    <Number>10</Number>
                    <Title>ODDANYCH WORKÓW</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </Text>
                </Column>
                <Column>
                    <Number>5</Number>
                    <Title>WSPARTYCH ORGANIZACJI</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </Text>
                </Column>
                <Column>
                    <Number>7</Number>
                    <Title>ZORGANIZOWANY ZBIÓREK</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                    </Text>
                </Column>
            </ColumnContainer>
        </ThreeColumnsContainer>
    );
};

export default ThreeColumns;
