import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  width: 100vw;
  height: 935px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Component = styled.div`
  flex: 1 1 45%;
  margin: 1em;
  background-color: #f0f0f0; 
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <Component>
                {'O nas'}
            </Component>
            <Component>
                {'zdjęcie'}
            </Component>
        </AboutUsContainer>
    );
};

export default AboutUs;
