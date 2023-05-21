import React from 'react';
import styled from 'styled-components';
import Image from '../assets/People.jpg';
import Decoration from '../assets/Decoration.svg';
import SignatureImage from '../assets/Signature.svg';

const AboutUsContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  margin-top: 2rem;
`;

const ComponentLeft = styled.div`
  width: 50%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 10rem;
  font-weight: 300;
`;

const DecorationImage = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5;
`;

const ImageContainer = styled.div`
  width: 70%;
  height: 300px;
  margin-top: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;

const Signature = styled.img`
  width: 150px;
  height: 120px;
  object-fit: cover;

`;

const ComponentRight = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Image});
  background-size: cover;
  background-position: 30% center;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <ComponentLeft>
                <Title>O nas</Title>
                <DecorationImage src={Decoration} alt="Decoration"/>
                <Text>
                    Nori grape silver beet broccoli kombu beet <br/> fava bean potato
                    quandong celery. <br/> Bunya nuts black-eyed pea prairie turnip leek <br/> lentil
                    turnip greens parsnip.
                </Text>
                <ImageContainer>
                    <Signature src={SignatureImage} alt="Signature"/>
                </ImageContainer>
            </ComponentLeft>
            <ComponentRight/>
        </AboutUsContainer>
    );
};

export default AboutUs;
