import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { couldStartTrivia } from 'typescript';
import ArrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';
type ButtonTypes = 'btn1' | 'btn2' | 'btn3' | 'btn4';
type WidthTypes = '1/4' | '1/2' | '3/4' | 'full' | number | undefined;

interface ButtonProps {
  id: ButtonTypes;
  children: ReactNode;
  path?: string;
  onClick?: () => void;
  btnType?: 'btn' | 'link';
  width?: '1/4' | '1/2' | '3/4' | 'full' | number;
}

const Buttons = ({
  children,
  id,
  path = '/',
  onClick,
  btnType,
  width,
}: ButtonProps) => {
  switch (id) {
    case 'btn1':
      if (btnType === 'btn') {
        return (
          <Button1 as="button" onClick={onClick} width={width}>
            {children}
          </Button1>
        );
      } else {
        return (
          <Button1 width={width} onClick={onClick} to={path}>
            {children}
          </Button1>
        );
      }
    case 'btn2':
      return <Button2 to={path}>{children}</Button2>;
    case 'btn3':
      return <Button3 to={path}>{children}</Button3>;
    case 'btn4':
      return (
        <ButtonLink to={path || '/'} onClick={onClick}>
          {children}
          <Icon src={ArrowRight} alt="right arrow icon" />
        </ButtonLink>
      );
  }
};

export default Buttons;

const Icon = styled.img``;

const BaseButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: var(--text-subtitle);
  padding: ${15 / 16}rem 0;
  width: ${160 / 16}rem;
`;

function calculateWidth(size: WidthTypes) {
  if (size == null) {
    return;
  } else if (typeof size === 'number') {
    return `${size}px`;
  } else {
    switch (size) {
      case '1/4': {
        return '25%';
      }
      case '1/2': {
        return '50%';
      }
      case '3/4': {
        return '75%';
      }
      case 'full': {
        return '100%';
      }
    }
  }
}

const Button1 = styled(BaseButton)<{
  width: WidthTypes;
}>`
  width: ${(p) => {
    return calculateWidth(p.width);
  }};
  background-color: hsl(var(--clr-primary-orange));
  color: hsl(var(--clr-white));
  font-weight: 700;
  &:hover,
  &:active {
    background-color: hsl(var(--clr-secondary-orange));
  }
`;

const Button2 = styled(BaseButton)`
  background-color: hsl(var(--clr-primary-black));
  color: hsl(var(--clr-white));
  &:hover,
  &:active {
    background-color: transparent;
    color: hsl(var(--clr-primary-black));
    border: 1px solid;
  }
`;

const Button3 = styled(BaseButton)`
  background-color: transparent;
  color: hsl(var(--clr-primary-black));
  border: 1px solid hsl(var(--clr-primary-black));

  &:hover,
  &:active {
    background-color: hsl(var(--clr-primary-black));
    color: hsl(var(--clr-white));
  }
`;

const Button4 = styled(BaseButton)`
  background-color: transparent;
  padding: 0;
  width: ${57 / 16}rem;
  justify-content: space-between;
  &:hover {
    color: hsl(var(--clr-primary-orange));
  }
`;

const ButtonLink = styled(BaseButton)`
  color: hsl(var(--clr-primary-black));
  background-color: transparent;
  padding: 0;
  width: ${57 / 16}rem;
  justify-content: space-between;
  &:hover {
    color: hsl(var(--clr-primary-orange));
  }
`;
