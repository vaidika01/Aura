import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(255, 119, 74);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    text-decoration-line: underline;
    color: white;
  }
`;

const Announcement = () => {
  return <Container>BRING THE HEAT SUMMER SALE - UP TO 75% OFF ON ALMOST EVERYTHING!*</Container>;
};

export default Announcement;