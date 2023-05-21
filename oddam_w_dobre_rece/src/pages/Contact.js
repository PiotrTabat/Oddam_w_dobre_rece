import React from 'react';
import styled from 'styled-components';
import contactImage from '../assets/Background-Contact-Form.jpg';
import decorationImage from '../assets/Decoration.svg';
import facebookIcon from '../assets/Facebook.svg';
import instagramIcon from '../assets/Instagram.svg';
import { Element } from 'react-scroll';

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 48rem) {
    height: auto;
  }
`;

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48rem) {
    flex-direction: column;
    height: auto;
  }
`;

const ContactBackground = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;

const ContactFormContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
`;


const ContactForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  white-space: pre-line;
`;

const InputField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #3C3C3C;
  margin-top: 0.5rem;
  width: 90%;
  height: 2rem;
  outline: none;
  color: #3C3C3C;

  &::placeholder {
    color: #3C3C3C26;
  }
`;

const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #3C3C3C;
  margin-top: 0.5rem;
  width: 100%;
  height: 6rem;
  outline: none;
  color: #3C3C3C;

  &::placeholder {
    color: #3C3C3C26;
  }
`;

const SendButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SendButton = styled.button`
  padding: 1rem 3rem;
  color: #3C3C3C;
  border: 1px solid #3C3C3C;
  font-size: 18px;
  cursor: pointer;
  background: none;
`;

const Decoration = styled.img`
  margin: 1rem 0;
`;

const Title = styled.h1`
  margin-top: 3rem;
`;

const FooterContainer = styled.div`
  position: relative;
  bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem;
`;

const SocialIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Contact = () => {
    return (
        <Element name="contact" className="element">
        <ContactContainer>
            <Component>
                <ContactBackground src={contactImage} alt="Poskładane rzeczy"/>
                <ContactFormContainer>
                    <Title>Skontaktuj się z nami</Title>
                    <Decoration src={decorationImage} alt="Decoration"/>
                    <ContactForm>
                        <InputContainer>
                            <InputDiv>
                                <Label>Wpisz swoje imię</Label>
                                <InputField type="text" placeholder="Krzysztof"/>
                            </InputDiv>
                            <InputDiv>
                                <Label>Wpisz swój email</Label>
                                <InputField type="email" placeholder="abc@xyz.pl"/>
                            </InputDiv>
                        </InputContainer>
                        <InputDiv>
                            <Label>{"Wpisz swoją wiadomość"}</Label>
                            <TextArea
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </InputDiv>
                        <SendButtonContainer>
                            <SendButton>Wyślij</SendButton>
                        </SendButtonContainer>
                    </ContactForm>
                </ContactFormContainer>
            </Component>
            <FooterContainer>
                © {new Date().getFullYear()} Copyright by Coders Lab
                <SocialIcons>
                    <SocialIcon src={facebookIcon} alt="Facebook"/>
                    <SocialIcon src={instagramIcon} alt="Instagram"/>
                </SocialIcons>
            </FooterContainer>
        </ContactContainer>
        </Element>
    );
};

export default Contact;
