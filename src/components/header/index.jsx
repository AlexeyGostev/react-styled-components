import React from 'react';
import styled from 'styled-components'

const HeaderElement = styled.header`
  background-color: #20232A;
  padding: 16px;
  font-weight: bold;
  letter-spacing: 0.8px;
  color: #61DAFB;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => {

  return (
    <HeaderElement>
      Styled Components example
    </HeaderElement>
  );
};

export default Header;
