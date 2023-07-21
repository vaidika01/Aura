import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../Components/CategoryItem";

const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
  font-weight: lighter;

  &:hover{
    text-decoration-line: underline;
  }
`;

const GridContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Categories = () => {
  return (
   
    <Container>
      <Heading>SHOP BY CATEGORY</Heading>
      <GridContainer>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Categories;
