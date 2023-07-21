import React from 'react';
import styled from 'styled-components';
import BackImg from './FRANKIE2_desktop (1).webp';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: -1;
`;

const Wrapper = styled.div`
  height: 45%;
  width: 30%;
  padding: 20px;
  background-color: white;
  border: 2px grey solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 30px;
  font-weight: lighter;
`;

const Input = styled.input`
  min-width: 60%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 65%;
  border: none;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  margin: 5px;
  color: inherit;
  text-decoration: none;
`

const SignIn = () => {
  return (
    <Container>
      <Image src={BackImg} />
      <Wrapper>
        <Title>SIGN IN</Title>
          <Input placeholder="Email" />
          <Input placeholder="password" />
          <Button>Sign In</Button>
          <StyledLink to="/Password">Forgot Password ?</StyledLink>
          <StyledLink to="/SignUp">Create an account</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

