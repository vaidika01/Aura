import React, { useState } from 'react';
import styled from 'styled-components';
import Product from '../Components/Product';
import { popularProducts } from '../data'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return ( 
   <div>
      
      <h2>Shopping Cart</h2>
      <Container>
        <Navbar/>
      <Announcement/>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} addToCart={addToCart} />
        ))}
      </Container>
      </div>
  );
};

export default Cart;


