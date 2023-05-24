import React, {useState} from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';

const WhomOrganizationsContainer = styled.div`
  max-width: 1344px;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ContentContainer = styled.div`
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
`;

const ContentTextContainer = styled.div`
  width: 70%;
  display: block;
  align-items: center;
  border-bottom: 1px solid #000;
  margin: 3rem 12rem;
`;

const ContentText1 = styled.p`
  text-align: start;
  margin: 0.1em 0;
  font-size: 1.2rem;
`;
const ContentText2 = styled.p`
    text-align: end;
  margin: 0.1em 0;
    font-size: 0.8rem;
`;
const ContentText3 = styled.p`
    text-align: start;
  margin: 0.1em 0;
    font-size: 0.8rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    margin-top: 2rem;
  gap: 1rem;
`;

const Button = styled.button`
  background: ${({$isActive}) => ($isActive ? '#B0AEAEFF' : 'none')};
  margin-bottom: 10px;
  margin-right: 1rem;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
`;

const WhomOrganizations = () => {
    const [page, setPage] = useState(1);

    const handleButtonClick = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <Element name="organizations" className="element" id="organizations">
            <WhomOrganizationsContainer>
                {page === 1 && (
                    <div>
                        <ContentTitle>Zajrzyj do naszej bazy <br/> i poznaj zweryfikowane Organizacje Pozarządowe, <br/> z którymi mamy przyjemność współpracować.</ContentTitle>
                        <ContentContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Pomoc dla Zwierząt”</ContentText1>
                                <ContentText2>karma dla zwierząt, zabawki, kojce</ContentText2>
                                <ContentText3>Cel i misja: Wsparcie dla schronisk dla zwierząt i działań na rzecz dobrobytu zwierząt.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Wsparcie dla Niepełnosprawnych”</ContentText1>
                                <ContentText2>sprzęt rehabilitacyjny, środki pomocnicze</ContentText2>
                                <ContentText3>Cel i misja: Wsparcie dla osób niepełnosprawnych, promowanie integracji i aktywności.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Kultura dla Wszystkich”</ContentText1>
                                <ContentText2>instrumenty muzyczne, książki, bilety na wydarzenia kulturalne</ContentText2>
                                <ContentText3>Cel i misja: Wspieranie dostępu do kultury dla osób z ubogich rodzin.</ContentText3>
                            </ContentTextContainer>
                        </ContentContainer>
                    </div>
                )}
                {page === 2 && (
                    <div>
                        <ContentTitle>Sprawdź kolejne organizacje, <br/> które wspieramy i które robią wielką różnicę <br/> w naszej społeczności.</ContentTitle>
                        <ContentContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Pomoc Seniorom”</ContentText1>
                                <ContentText2>ubrania, jedzenie, sprzęt AGD, meble</ContentText2>
                                <ContentText3>Cel i misja: Wsparcie dla osób starszych w codziennych czynnościach, poprawa jakości ich życia.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Edukacja dla Wszystkich”</ContentText1>
                                <ContentText2>książki, artykuły szkolne, sprzęt elektroniczny</ContentText2>
                                <ContentText3>Cel i misja: Dostarczanie materiałów edukacyjnych dla dzieci i młodzieży z ubogich rodzin.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Organizacja “Zielony Świat”</ContentText1>
                                <ContentText2>środki do recyklingu, sadzonki drzew</ContentText2>
                                <ContentText3>Cel i misja: Działania na rzecz ochrony środowiska i promowania zrównoważonego rozwoju.</ContentText3>
                            </ContentTextContainer>
                        </ContentContainer>
                    </div>
                )}

                <div>
                    <ButtonsContainer>
                        <Button
                            onClick={() => handleButtonClick(1)}
                            $isActive={page === 1}
                        >
                            1
                        </Button>
                        <Button
                            onClick={() => handleButtonClick(2)}
                            $isActive={page === 2}
                        >
                            2
                        </Button>
                    </ButtonsContainer>
                </div>
            </WhomOrganizationsContainer>
        </Element>
    );
};

export default WhomOrganizations;
