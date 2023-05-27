import React, {useState} from 'react';
import styled from 'styled-components';
import decorationImage from '../assets/Decoration.svg';
import {Element} from 'react-scroll';
import LoginNavigation from "../components/LoginNavigation";
import ButtonNavbar from "../components/ButtonNavbar";
import {Link} from "react-router-dom";
import {supabase} from '../helper/supabaseClient';
import {useNavigate} from "react-router-dom";


const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    margin: 1em auto;
  }
`;

const NavbarContainer = styled.div`
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 16px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  margin-top: 3rem;
`;
export const DecorationImage = styled.img`
  margin-top: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F0F1F1;
  flex-direction: column;
  margin-top: 6rem;
  width: 30%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem 1rem;
`;

const Label = styled.label`
  white-space: pre-line;
`;

const InputField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #3C3C3C;
  margin-top: 0.5rem;
  width: 100%;
  height: 2rem;
  outline: none;
  color: #3C3C3C;

  &::placeholder {
    color: #3C3C3C26;
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
  font-size: 16px;
  width: 40%;

`;

const LoginButtonLeft = styled.button`
  margin: 1rem 0 0 2rem;
  background: none;
  border: none;
  padding: 0;
  color: #000000;
  cursor: pointer;
`;
const LoginButtonRight = styled.button`
  margin: 1rem 0 0 2rem;
  background: none;
  border: black 1px solid;
  padding: 1rem 2rem;
  color: #000000;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            const {error} = await supabase.auth.signInWithPassword({email, password});

            if (error) {
                throw error;
            }
            navigate('/');
            window.location.reload();
        } catch (error) {
            alert(error.error_description || error.message);
        }
    }

    return (
        <Element name="login" className="element">
            <LoginContainer>
                <NavbarContainer>
                    <LoginNavigation/>
                    <ButtonNavbar/>
                </NavbarContainer>
                <Title>Zaloguj się</Title>
                <DecorationImage src={decorationImage} alt="Decoration"/>
                <InputContainer>
                    <InputDiv>
                        <Label>Email</Label>
                        <InputField
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@xyz.pl"
                        />
                    </InputDiv>
                    <InputDiv>
                        <Label>Hasło</Label>
                        <InputField
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Twoje hasło"
                        />
                    </InputDiv>
                </InputContainer>
                <LoginButtonContainer>
                    <LoginButtonLeft><StyledLink to='/register'>Załóż konto</StyledLink></LoginButtonLeft>
                    <LoginButtonRight onClick={() => handleLogin(email, password)}>Zaloguj się</LoginButtonRight>
                </LoginButtonContainer>
            </LoginContainer>
        </Element>
    )
};

export default Login;

