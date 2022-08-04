import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 50px;
  height: 150px;
  background-color: #bde986;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  color: #1a2733;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  margin: 10px 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>E-SHOP</Logo>
          <MenuItem>Address</MenuItem>
          <MenuItem>mail@email.com</MenuItem>
          <MenuItem>1234567890</MenuItem>
        </Left>
        <Center>
          <MenuItem>HOME</MenuItem>
          <MenuItem>SHOES</MenuItem>
          <MenuItem>BACKPACKS</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </Center>
        <Right>
          <h3>CONNECT SOCIALLY</h3>
          <MenuItem>Facebook</MenuItem>
          <MenuItem>Instagram</MenuItem>
          <MenuItem>Twitter</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
