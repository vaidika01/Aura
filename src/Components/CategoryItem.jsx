import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 10px;
  height: 70vh;
  position: relative;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.95;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Title = styled.h1`
  color: white;
  transition: color 0.3s;

  ${Info}:hover & {
    color: black;
  }
`;

const Button = styled.button`
  border: none;
  margin: 13px;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;

  ${Info}:hover & {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to="ProductList"><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
