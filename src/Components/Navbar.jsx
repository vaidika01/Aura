import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { useCart } from "../CartContext";
import { useFavorites } from "../FavoritesContext";

const StyledNavbar = styled.nav`
  background-color: #fbf9f7;
  color: black;
  position: sticky;
  top: 0;
  z-index: 3;
`;

const Container = styled.div`
  height: 60px;
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 97%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%", padding: "10px 0px" })}
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
  ${mobile({ justifyContent: "center" })}
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
  ${mobile({ marginLeft: "10px " })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "70px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 42px;
  ${mobile({ fontSize: "30px" })}
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

// const Cart = styled.div`
//   margin-left: 5px;
// `;

// const Favorites = styled.div`
//   margin-left: 5px;
// `;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const CartNumber = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: relative;
  bottom: -7px;
  right: 7px;
  text-align: center;
  font-size: 12px;
  background-color: rgb(255, 119, 74);
  color: white;
`;

const Navbar = () => {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  const cartTotalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const favoritesTotalItems = favorites.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <StyledNavbar>
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
              <StyledLink to="/SignIn"> SIGN IN </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/Favorites">
                <BsSuitHeart />
              </StyledLink>
              <CartNumber>{favoritesTotalItems}</CartNumber>
              {/* <Favorites>FAVORITES</Favorites> */}
            </MenuItem>
            <MenuItem>
              <StyledLink to="/Cart">
                <BsCart2 />
              </StyledLink>
              <CartNumber>{cartTotalItems}</CartNumber>
              {/* <Cart>CART</Cart> */}
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
