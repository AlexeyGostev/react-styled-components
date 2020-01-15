import React from 'react';
import styled from 'styled-components'

const FooterElement = styled.footer`
  text-align: left;
  background-color: #20232A;
  padding: 16px;
  letter-spacing: 0.8px;
  color: #61DAFB;
`;

const Footer = () => {

  return (
    <FooterElement>
      Styled components example
    </FooterElement>
  );
};

export default Footer;
