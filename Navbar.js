import React , { useState }from 'react';
import styled from "styled-components";
import{ ReactComponent as LogoIcon } from "../assests/logo.svg";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <Nav>
            <Container>
                <LogoIcon/>
                <Menu  isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Sell</MenuLink>
            <MenuLink href="">Marketplace</MenuLink>
            <MenuLink href="">Community</MenuLink>
            <MenuLink href="">Develop</MenuLink>
            <MenuLink href="">Resources</MenuLink>
            <MenuLink href="">Log in</MenuLink>
            <Button>Get Started</Button>
          </LinkWrapper>
        </Menu>
         
            </Container>

        </Nav>
          
        
    );
};

export default Navbar

const Nav =styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  `;

const Container= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
max-width: 10000px;
margin: auto;
width:100%;
padding: 2rem;


svg {
    height: 1.4rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #2567502;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;
    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;
const Menu =styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }`;
const LinkWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
padding: 1.5rem 0;
@media (max-width: 768px) {
  flex-direction: column;
}`;
const MenuLink = styled.a`

text-decoration: none;
color: ##272D4E;
font-size: 0.9rem;
padding: 0.7rem 1.5rem;
transition: all 0.2s ease-in;
border-radius: 0.5rem;
font-weight: 500;
&:hover {
  color: #7781d4;
  background: #e7e9fc;
}
`;
const Button=styled.button`
font-size: 0.8rem;
  background:#7854f7 ;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #7854f7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
    
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
  }

`;
