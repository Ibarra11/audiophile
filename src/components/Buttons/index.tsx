import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'react-feather';
type ButtonTypes = 'btn1' | 'btn2' | 'btn3';
interface ButtonProps {
  id: ButtonTypes;
  children: ReactNode;
}

const Buttons = ({ children, id }: ButtonProps) => {
  switch (id) {
    case 'btn1':
      return <Button1>{children}</Button1>;
    case 'btn2':
      return <Button2>{children}</Button2>;
    case 'btn3':
      return (
        <Button3>
          {children}
          <ChevronRight size={18} strokeWidth="2" />
        </Button3>
      );
  }
};

export default Buttons;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${13 / 16}rem;
  padding: 15px 0;
  width: 160px;
`;

const Button1 = styled(BaseButton)`
  background-color: var(--dark-orange);
  color: var(--white);
  font-weight: 700;

  &:hover {
    background-color: var(--light-orange);
  }
`;

const Button2 = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid var(--primary-black);
  color: var(--primary-black);
  &:hover {
    color: var(--white);
    background-color: var(--primary-black);
  }
`;

const Button3 = styled(BaseButton)`
  background-color: transparent;
  padding: 0;
  &:hover {
    color: var(--dark-orange);
  }
  & > svg {
    color: var(--dark-orange);
    position: relative;
    bottom: 1px;
  }
`;
