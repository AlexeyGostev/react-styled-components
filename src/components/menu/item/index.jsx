import React from 'react';
import styled from 'styled-components'

const Li = styled.li`
  padding: 10px;
  list-style: none;
  color: black;
  
  &:hover {
   background-color: #20232A;
   color: white;
  }
`;

const Item = (props) => {
  const {children} = props;

  return (
    <Li>{children}</Li>
  );
};

export default Item;
