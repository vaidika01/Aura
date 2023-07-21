import React from 'react'
import  styled  from 'styled-components'
import Sales from './Sale_UPTO75_UK_DESK.gif'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-height: 95%;
  width: 100vw; 
  display: flex;
`
const Image = styled.img`
  height: auto;
  max-height: 100%;
  width: 100%;
  object-fit: fill;
  cursor: pointer;
 ` 
const Hero = () => {
    return (
         <Container>
            <Wrapper>
               <Image src={Sales}/>
            </Wrapper>
          </Container>
    );
};

export default Hero
