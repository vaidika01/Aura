import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    margin-top: 30px;
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  font-size: 27px;
  text-align: center;
  font-weight: lighter;
  text-transform: uppercase;

  &:hover{
    text-decoration-line: underline;
  }
`;

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      <Heading> Discover Our Most Loved Clothing Pieces</Heading>
      <GridContainer>{popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </GridContainer>
    </Container>
  );
};

export default Products;