import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../Components/CategoryItem";
import { mobile } from "../Responsive";

const Container = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "coloumn" })}
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
  font-weight: lighter;
  ${mobile({ display: "none" })}
  &:hover {
    text-decoration-line: underline;
  }
`;

const GridContainer = styled.div`
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
