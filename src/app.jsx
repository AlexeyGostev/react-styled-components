import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import Row from './components/row';
import {Item, Menu} from './components/menu';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({isDark}) => (isDark ? 'white' : 'black')};
    background-color: ${({isDark}) => (isDark ? 'grey' : 'white')};
    margin: 0;
    font-family: sans-serif;
  }
`;

const App = () => {
  const [isDark, toggleIsDark] = useState();

  return (
    <MainWrap>
      <GlobalStyle />

      <Header />
      <Row>
        <Body />
        <Menu onChangeDark={() => {console.log('test');}}>
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
