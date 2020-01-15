import React from 'react';
import styled from 'styled-components'

const RowWrap = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Row = (props) => {
  const {children} = props;

  return (
    <RowWrap>
      {children}
    </RowWrap>
  );
};

export default Row;
