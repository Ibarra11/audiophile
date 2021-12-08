import React, { ReactNode } from 'react';
import { ButtonTypes, WidthTypes, OpacityTypes } from './types';
import { calculateWidth, calculateOpacity } from './helpers';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import ArrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';

interface ButtonProps {
  id: ButtonTypes;
  children: ReactNode;
  path?: string;
  onClick?: () => void;
  btnType?: 'btn' | 'link';
  disabled?: boolean;
  width?: WidthTypes;
  opacity?: OpacityTypes;
}

const Buttons = ({
  children,
  id,
  path = '/',
  onClick,
  btnType,
  width,
  opacity,
}: ButtonProps) => {
  switch (id) {
    case 'btn1':
      if (btnType === 'btn') {
        return (
          <Button1
            as="button"
            width={width}
            opacity={opacity}
            onClick={onClick}
          >
            {children}
          </Button1>
        );
      } else {
        return (
          <Button1
            width={width}
            opacity={opacity}
            onClick={onClick}
            to={path}
          >
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

const Button1 = styled(BaseButton)<{
  width: WidthTypes;
  opacity: OpacityTypes;
}>`
  width: ${(p) => {
    return calculateWidth(p.width);
  }};
  background-color: hsl(var(--clr-primary-orange));
  opacity: ${(p) => calculateOpacity(p.opacity)};
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
