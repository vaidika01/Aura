import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const Container = styled.div`
  height: 60px;
  width: 100vw;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  width: 95%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const Country = styled.span`
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration-line: underline;
  }
  ${mobile({ display: "none" })}
`;

const Name = styled.div`
  margin-left: 5px;
`;

const SearchContainer = styled.div`
  margin-left: 25px;
  padding: 3px;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: lighter;
  ${mobile({ fontSize: "24px" })}
  &:hover {
    text-decoration-line: underline;
  }
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    text-decoration-line: underline;
  }
`;

const Favorites = styled.div`
  margin-left: 5px;
`;

const Cart = styled.div`
  margin-left: 5px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Country>
              <SlArrowDown />
              <Name>IN</Name>
            </Country>
            <SearchContainer>
              <Input />
              <CiSearch />
            </SearchContainer>
          </Left>
          <Center>
            <StyledLink to="/">
              <Logo> AURA </Logo>
            </StyledLink>
          </Center>
          <Right>
            <MenuItem>
              {" "}
              <StyledLink to="/SignIn"> SIGN IN </StyledLink>
            </MenuItem>
            <MenuItem>
              <BsSuitHeart />
              <Favorites>FAVORITES</Favorites>
            </MenuItem>
            <MenuItem>
              <BsCart2 />
              <StyledLink to="/Cart">
                <Cart>CART</Cart>
              </StyledLink>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
