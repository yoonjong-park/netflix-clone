import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: red;
  font-size: 14px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.svg`
  margin-right: 50px;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
          <Item>Movies</Item>
          <Item>New & Popular</Item>
          <Item>My List</Item>
        </Items>
      </Col>
      <Col>
        <button>search</button>
      </Col>
    </Nav>
  );
};

export default Header;
