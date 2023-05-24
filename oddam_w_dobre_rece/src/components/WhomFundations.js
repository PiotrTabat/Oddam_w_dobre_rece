import React, {useState} from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';

const WhomFundationContainer = styled.div`
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

const WhomFundations = () => {
    const [page, setPage] = useState(1);

    const handleButtonClick = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <Element name="fundation" className="element" id="fundation">
            <WhomFundationContainer>
                {page === 1 && (
                    <div>
                        <ContentTitle>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/> którymi
                            współpracujemy. Możesz sprawdzić czym się zajmują, <br/> komu pomagają i czego
                            potrzebują.</ContentTitle>
                        <ContentContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja “Dbam o Zdrowie”</ContentText1>
                                <ContentText2>ubrania, jedzenie, sprzęt AGD, meble, zabawki</ContentText2>
                                <ContentText3>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                                    życiowej.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja “Dla dzieci”</ContentText1>
                                <ContentText2>ubrania, meble, zabawki</ContentText2>
                                <ContentText3>Cel i misja: Pomoc dzieciom z ubogich rodzin.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja “Bez domu”</ContentText1>
                                <ContentText2>ubrania, jedzenie, ciepłe koce</ContentText2>
                                <ContentText3>Cel i misja: Pomoc dla osób nie posiadających miejsca
                                    zamieszkania.</ContentText3>
                            </ContentTextContainer>
                        </ContentContainer>
                    </div>
                )}
                {page === 2 &&
                    <div>
                        <ContentTitle>W naszej bazie znajdziesz również Fundacje, <br/> które skupiają się na edukacji, środowisku i pomocy seniorom. Zobacz, <br/> na czym polega ich działalność i jak możesz im pomóc.</ContentTitle>
                        <ContentContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja “Edu dla wszystkich”</ContentText1>
                                <ContentText2>Opis: Książki, artykuły szkolne, sprzęt komputerowy</ContentText2>
                                <ContentText3>Cel i misja: Pomoc w edukacji dzieci i młodzieży z ubogich rodzin.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja "Zielony Świat"</ContentText1>
                                <ContentText2>Opis: Nasiona, narzędzia ogrodnicze, wolontariusze do pracy w ogrodach</ContentText2>
                                <ContentText3>Cel i misja: Promowanie zrównoważonego rozwoju poprzez edukację ekologiczną.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja "Seniorzy na Plus"</ContentText1>
                                <ContentText2>Opis: Ubrania, żywność, środki higieny, książki</ContentText2>
                                <ContentText3>Cel i misja: Pomoc seniorom w trudnej sytuacji życiowej.</ContentText3>
                            </ContentTextContainer>
                        </ContentContainer>
                    </div>}
                {page === 3 &&
                    <div>
                        <ContentTitle>Oto niektóre z Fundacji, które promują zdrowy styl życia, <br/> kulturę i zdrowe odżywianie. Dowiedz się więcej o ich misji i zobacz, <br/> czego potrzebują do swojej pracy.</ContentTitle>
                        <ContentContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja "Sport dla wszystkich"</ContentText1>
                                <ContentText2>Opis: Sprzęt sportowy, strój sportowy, obuwie sportowe</ContentText2>
                                <ContentText3>Cel i misja: Promowanie zdrowego stylu życia i aktywności fizycznej wśród dzieci i młodzieży..</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja "Kultura dla każdego"</ContentText1>
                                <ContentText2>Opis: Instrumenty muzyczne, kostiumy, materiały artystyczne</ContentText2>
                                <ContentText3>Cel i misja: Dostęp do kultury dla wszystkich, niezależnie od warunków finansowych.</ContentText3>
                            </ContentTextContainer>
                            <ContentTextContainer>
                                <ContentText1>Fundacja "Zdrowe jedzenie"</ContentText1>
                                <ContentText2>Opis: Produkty spożywcze, sprzęt kuchenny, naczynia</ContentText2>
                                <ContentText3>Cel i misja: Walka z niedożywieniem poprzez dostarczanie zdrowych posiłków potrzebującym.</ContentText3>
                            </ContentTextContainer>
                        </ContentContainer>
                    </div>}

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
                        <Button
                            onClick={() => handleButtonClick(3)}
                            $isActive={page === 3}
                        >
                            3
                        </Button>
                    </ButtonsContainer>
                </div>
            </WhomFundationContainer>
        </Element>
    );
};

export default WhomFundations;
