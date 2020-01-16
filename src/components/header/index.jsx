import React from 'react';
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox';

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
  display: flex;
  align-content: center;
`;

const WrapToggle = styled.div`
  position: absolute;
  right: 10px;
  margin-right: 40px;
`;

const Header = (props) => {
  const { onChangeDark } = props;

  return (
    <HeaderElement>
      Styled Components example

      <WrapToggle>
        <Checkbox onChange={onChangeDark}>Toggle dark mode</Checkbox>
      </WrapToggle>
    </HeaderElement>
  );
};

export default Header;
