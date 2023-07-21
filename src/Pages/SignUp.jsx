import styled from "styled-components";
import BackImg from './FRANKIE2_desktop (1).webp';

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
  height: 55%;
  width: 35%;
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
  font-size: 25px;
  font-weight: lighter;
`;

const Input = styled.input`
  min-width: 70%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 75%;
  border: none;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Agreement = styled.div`
  padding: 10px 10px;
  font-size: 15px;
  font-weight: lighter;
`;

const SignUp = () => {
  return (
    <Container>
        <Image src={BackImg} />
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By signing up for an account you accept our Terms and Privacy Policy.
          </Agreement>
          <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default SignUp;