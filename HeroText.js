import React from "react";
import styled from "styled-components";
import bgimg from "../assests/hero.svg";
import Navbar from "../components/Navbar";
import bg from "../assests/backimg.png";

const HeroText = () => {
  return (
    <Container bg={bg}>
     
     <h1>Building exactly the<br/> eCommerce websites you want.<br/></h1>
     
    
      <h5>wooCommerce is a customizable, open-source eCommerce platform built on WordPress.<br/> Get started quickly and make your way.</h5>
    

     <Wrapper>
        <Navbar />
    
   
      <BtnContainer>
        <button className="Start a New Store">Start a New Store</button>
       <h2>or</h2>
        <button className="customize">customize & extend</button>
      </BtnContainer>
      
      <img src={bgimg} alt="zoom" width="1000"height="500"/>
      
      </Wrapper>

    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const Wrapper = styled.div`

`;


const Container=styled.div`

height:100vh;
width:100%;
display:flex;
justify-content:left;
align-items:center;
background-image: url(${({ bg }) => bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
p{
 
}


  h5 {

    transform: translateYX(-200px);

    color: #515151;
    font-weight: 500;
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
    text-align:left;
  }
  h1 {
    padding: 2rem;
    paragraph-spacing:0;
    letter-spacing:0%;
    align:top;
    height:auto;
    transform: translateY(-120px);
    
 
    font-size: 3.7rem;
    font-weight: 900;
    text-align: left;
    &:nth-of-type(1) {
      color: #272D4E;
      font-weight: 700;
    }
    
  }

    h5 {

 
      color: #515151;
      font-weight: 500;
      font-size: 0.7rem;
      margin-bottom: 0.8rem;
      text-align:left;
      
    }

`;
const BtnContainer=styled.div` 
margin-top: 2rem;
button {
 
  background: #7854F7;
  border: none;
  padding: 0.9rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #7854F7;
  transition: all 0.3s ease-in-out;
  margin: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #81d1ff;
    transform: translateY(-50px);
  }
}
.readmore {
  color: #81d1ff;
  background: transparent;
  border: 3px solid #81d1ff;
  &:hover {
    box-shadow: 0px 17px 16px -11px #81d1ff;
    transform: translateY(-10px);
  }
}`;

export default HeroText

