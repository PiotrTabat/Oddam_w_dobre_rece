import React from 'react';
import styled from 'styled-components';

const WhomWeHelpContainer = styled.div`
  width: 100vw;
  max-width: 1344px;
  height: 862px;
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

const Component = styled.div`
  background-color: #f0f0f0; 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const WhomWeHelp = () => {
    return (
        <WhomWeHelpContainer>
            <Component>
                {'Komu pomagamy'}
            </Component>
        </WhomWeHelpContainer>
    );
};

export default WhomWeHelp;