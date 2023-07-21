import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

const FilterContainer = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  text-align: center;
`;

const FilterText = styled.span`
  margin-left: 50px;
  margin-right: 30px;
  font-size: 25px;
  font-weight: lighter;
`;

const Select = styled.select`
  padding: 7px;
  margin-right: 15px;
  font-size: 15px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <div>
      <Container>
        <Navbar/>
        <Announcement/>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={'DEFAULT'}>
            <Option value="DEFAULT" disabled>Color</Option>
            <Option value="1">White</Option>
            <Option value="2">Black</Option>
            <Option value="3">Red</Option>
            <Option value="4">Blue</Option>
            <Option value="5">Yellow</Option>
            <Option value="6">Green</Option>
          </Select>
          <Select defaultValue={'DEFAULT'}>
            <Option value="DEFAULT" disabled>Size</Option>
            <Option value="1">XS</Option>
            <Option value="2">S</Option>
            <Option value="3">M</Option>
            <Option value="4">L</Option>
            <Option value="5">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={'DEFAULT'}>
            <Option value="DEFAULT" disabled>Newest</Option>
            <Option value="1">Price (asc)</Option>
            <Option value="2">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
      </Container>
    </div>
  )
}

export default ProductList
