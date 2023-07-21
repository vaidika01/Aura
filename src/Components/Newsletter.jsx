import styled from "styled-components";
import { IoMdSend } from "react-icons/io";

const Container = styled.div`
  height: 50vh;
  background-color: #fbf9f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`

const Msg = styled.div`
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 25px;

`

const InputContainer = styled.div`
  width: 45%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>SUBSCRIBE TO NEWSLETTER </Title>
      <Msg>Get timely updates from your favorite products.</Msg>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <IoMdSend/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;