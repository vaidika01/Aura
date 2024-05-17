import React from "react";
import styled from "styled-components";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { mobile, tablet } from "../Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbf9f7;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "row" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 15px;
  font-size: 50px;
  font-weight: lighter;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 20px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
  margin-right: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 40%;
  margin-bottom: 10px;
  &:hover {
    text-decoration-line: underline;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Contact = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    text-decoration-line: underline;
  }
`;
const Customer = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> AURA </Logo>
        <SocialContainer>
          <SocialIcon>
            <BsFacebook color="3B5999" />
          </SocialIcon>
          <SocialIcon>
            <BsInstagram color="E4405F" />
          </SocialIcon>
          <SocialIcon>
            <BsTwitter color="55ACEE" />
          </SocialIcon>
          <SocialIcon>
            <BsPinterest color="E60023" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Delivery</ListItem>
          <ListItem>Offers</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Contact>
          <Customer> Customer Love </Customer>
          <FiMail />
        </Contact>
      </Right>
    </Container>
  );
};

export default Footer;
