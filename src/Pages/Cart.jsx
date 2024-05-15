import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../Responsive";
import { useCart } from "../CartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: black;
  border: none;
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
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

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
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

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  font-weight: lighter;
`;

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const cartTotalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingCost = cartItems.length > 0 ? 100 : 0;
  const discount = shippingCost;
  const total = subtotal + shippingCost - discount;

  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Top>
          <TopButton type="filled">
            <StyledLink to="/"> CONTINUE SHOPPING </StyledLink>
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cartTotalItems})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Wrapper>
          <Bottom>
            <Info>
              {cartItems.map((item) => (
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
                      <ProductAmountContainer>
                        <AiOutlineMinus
                          onClick={() => decreaseQuantity(item.id)}
                        />
                        <ProductAmount>{item.quantity}</ProductAmount>
                        <AiOutlinePlus
                          onClick={() => increaseQuantity(item.id)}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>₹{item.price}</ProductPrice>
                    </Details>
                  </ProductDetail>
                </Product>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>₹{subtotal}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>₹{shippingCost}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>₹{discount}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>₹{total}</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
