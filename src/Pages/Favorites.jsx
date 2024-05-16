import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../Responsive";
import { useFavorites } from "../FavoritesContext";
import { useCart } from "../CartContext";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 20px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductColor = styled.div``;

const ProductSize = styled.span``;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  font-weight: lighter;
`;

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { cartItems } = useCart();

  const favoritesTotalItems = favorites.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
  };

  const cartTotalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Top>
          <TopTexts>
            <TopText>Shopping Bag({cartTotalItems})</TopText>
            <TopText>Your Wishlist ({favoritesTotalItems})</TopText>
          </TopTexts>
        </Top>
        <Wrapper>
          {favorites.map((item) => (
            <Product key={item.id}>
              <ProductDetail>
                <Image src={item.img} />
                <Details>
                  <ProductName>
                    <b>Product: </b> {item.title}
                  </ProductName>
                  <ProductColor>
                    <b>Color: </b> {item.color}
                  </ProductColor>
                  <ProductSize>
                    <b>Size: </b> XS
                  </ProductSize>
                  <ProductPrice>₹{item.price}</ProductPrice>
                  <Button onClick={() => handleRemoveFromFavorites(item.id)}>
                    REMOVE
                  </Button>
                </Details>
              </ProductDetail>
            </Product>
          ))}
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Favorites;
