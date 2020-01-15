import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  min-width: 200px;
  height: 100%;
  border-left: 1px solid #b4b4b4;
  background-color: #e2e2e2;
`;

const Ul = styled.ul`
  position: fixed;
  width: 100%;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const Menu = (props) => {
  const {children} = props;

  return (
    <Nav>
      <Ul>
        {children}
      </Ul>
    </Nav>
  );
};

export default Menu;
