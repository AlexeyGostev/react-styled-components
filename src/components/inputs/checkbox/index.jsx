import React from 'react';
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;
  cursor: pointer;
`;

const CircleElement = styled.span`
  position: absolute;
  width: 40px;
  height: 24px;
  background-color: #646464;  
  border-radius: 20px;
  right: 0;
  
  &:after {
    content: "";
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    transition: 200ms ease-out transform;
  }
`;

const Text = styled.span`
  margin-right: 30px;
`;

const InputToggleDark = styled.input`
  &:focus {
    outline: none;
  }
  
  &:focus + ${CircleElement} {
    box-shadow: 0 0 0 2px rgba(255,255,255,0.65);
  }

  &:checked + ${CircleElement} {
    background-color: #54bdd8;
  }
  
  &:checked + ${CircleElement}:after {
    transform: translateY(-50%) translateX(15px);
  }
`;

const Checkbox = (props) => {
  const {children} = props;

  return (
    <Label htmlFor="darkToggle">
      <Text>{children}</Text>
      <InputToggleDark id="darkToggle" type="checkbox" />
      <CircleElement />
    </Label>
  );
};

export default Checkbox;
