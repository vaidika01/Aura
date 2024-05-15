import styled from "styled-components";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbf9f7;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 85%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Product = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <StyledLink to="/Cart">
          <Icon onClick={handleAddToCart}>
            <BsCart2 />
          </Icon>
        </StyledLink>

        <StyledLink to={"/ProductPage"} state={item}>
          <Icon>
            <CiSearch />
          </Icon>
        </StyledLink>

        <Icon>
          <BsSuitHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
