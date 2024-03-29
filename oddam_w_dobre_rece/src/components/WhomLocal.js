import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const WhomLocalContainer = styled.div`
  max-width: 1344px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContentTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1em 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentTextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #000;
  margin: 3rem 12rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
  }
`;

const ContentText1 = styled.p`
  text-align: start;
  margin: 0.1em 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const ContentText2 = styled.p`
  text-align: end;
  margin: 0.1em 0;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    text-align: start;
    font-size: 0.7rem;
  }
`;
const ContentText3 = styled.p`
  text-align: start;
  margin: 0.1em 0;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const WhomLocal = () => {
    return (
        <Element name="local" className="element" id="local">
            <WhomLocalContainer>
                <div>
                    <ContentTitle>
                        Wspieraj lokalne inicjatywy <br /> poprzez udział w zbiórkach. Sprawdź, <br /> co jest aktualnie potrzebne w
                        Twojej okolicy.
                    </ContentTitle>
                    <ContentContainer>
                        <ContentTextContainer>
                            <ContentText1>Zbiórka “Pomoc dla szkół”</ContentText1>
                            <ContentText2>Artykuły szkolne, sprzęt sportowy, książki</ContentText2>
                            <ContentText3>
                                Cel i misja: Wsparcie lokalnych szkół, dostarczanie potrzebnych materiałów dla uczniów.
                            </ContentText3>
                        </ContentTextContainer>
                        <ContentTextContainer>
                            <ContentText1>Zbiórka “Ratujemy zwierzęta”</ContentText1>
                            <ContentText2>Karma dla zwierząt, zabawki, kojce</ContentText2>
                            <ContentText3>
                                Cel i misja: Pomoc lokalnym schroniskom dla zwierząt, poprawa warunków życia zwierząt.
                            </ContentText3>
                        </ContentTextContainer>
                        <ContentTextContainer>
                            <ContentText1>Zbiórka “Czyste Miasto”</ContentText1>
                            <ContentText2>Worki na śmieci, rękawice ochronne, grabie</ContentText2>
                            <ContentText3>
                                Cel i misja: Organizowanie akcji sprzątania miasta, promowanie dbałości o środowisko.
                            </ContentText3>
                        </ContentTextContainer>
                    </ContentContainer>
                </div>
            </WhomLocalContainer>
        </Element>
    );
};

export default WhomLocal;
