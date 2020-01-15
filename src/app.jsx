import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import Row from './components/row';
import {Item, Menu} from './components/menu';
import {createGlobalStyle} from 'styled-components';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.dark ? 'white' : 'black')};
    margin: 0;
    font-family: sans-serif;
  }
`;

const App = () => {

  return (
    <MainWrap>
      <GlobalStyle />

      <Header />
      <Row>
        <Body />
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Menu>
      </Row>
      <Footer />
    </MainWrap>
  );
};

export default App;
