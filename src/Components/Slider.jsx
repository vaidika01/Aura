import  styled  from 'styled-components'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Blue from './Slider_img/Blue-Sky Thinking.png'
import Dress from './Slider_img/Dresses_Secondary_Desktop_US_.jpg'
import Summer from './Slider_img/Summer blues.png'

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  margin: auto;
  top: 0;
  bottom: 0;
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.65;
  cursor: pointer;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`

const Slider = () => {
  const images = [Blue, Dress, Summer];
  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
  <Arrow direction="left" className="carousel-arrow carousel-arrow-prev" onClick={onClickHandler} title={label} aria-label={label}>
   <BiLeftArrow />
 </Arrow>
 );
 
 const renderArrowNext = (onClickHandler, hasNext, label) =>
 hasNext && (
 <Arrow direction="right" className="carousel-arrow carousel-arrow-next" onClick={onClickHandler} title={label} aria-label={label}>
 <BiRightArrow />
 </Arrow>
 );
  return (
    <Container>
      
      <Wrapper >
         <Carousel useKeyboardArrows={true}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}>
         {images.map((url, index) => (
            <div key={index} className="slide">
               <img src={url} alt={`Image_S`} />
           </div>
         ))}
         </Carousel>
      </Wrapper>
      
    </Container>)
};
    export default Slider