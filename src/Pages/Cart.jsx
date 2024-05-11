import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
