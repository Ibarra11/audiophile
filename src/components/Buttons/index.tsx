import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import ArrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';
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
          <Icon src={ArrowRight} alt="right arrow icon" />
        </Button3>
      );
  }
};

export default Buttons;

const Icon = styled.img`
  position: relative;
  bottom: 1px;
`;
const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: var(--text-subtitle);
  padding: ${15 / 16}rem 0;
  width: ${160 / 16}rem;
`;

const Button1 = styled(BaseButton)`
  background-color: hsl(var(--clr-primary-orange));
  color: hsl(var(--clr-white));
  font-weight: 700;

  &:hover,
  &:active {
    background-color: hsl(var(--clr-secondary-orange));
  }
`;

const Button2 = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid hsl(--clr-primary-black);
  color: hsl(--clr-primary-black);
  &:hover {
    color: hsl(var(--clr-white));
    background-color: hsl(--clr-primary-black);
  }
`;

const Button3 = styled(BaseButton)`
  background-color: transparent;
  padding: 0;
  width: ${57 / 16}rem;
  justify-content: space-between;
  &:hover {
    color: hsl(var(--clr-primary-orange));
  }
`;
