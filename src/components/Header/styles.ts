import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '../../shared/css/breakpoints';
const HeaderWrapper = styled.header`
  background-color: hsl(var(--clr-primary-black) / 0.9);
  padding-block: 2rem;
  padding-inline: ${24 / 16}rem;
  border-bottom: 1px solid hsl(var(--clr-secondary-gray) / 0.25);
`;

const MobileToTablet = styled.div`
  display: flex;

  ${breakpoints.tabletAndUp} {
    gap: 4rem;
  }

  ${breakpoints.laptopAndUp} {
    display: none;
  }
`;

const LaptopToDesktop = styled.div`
  display: none;
  ${breakpoints.laptopAndUp} {
    display: flex;
  }
`;

const IconButtonWrapper = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  top: 1px;
  background: transparent;
  border: none;

  &:last-of-type {
    justify-content: flex-end;
  }
  ${breakpoints.tabletAndUp} {
    &:first-of-type {
      flex: revert;
    }
  }
`;

const NavList = styled.nav``;

const NavItem = styled(Link)``;

const Icon = styled.img`
  display: block;
`;

const IconLinkWrapper = styled(Link)`
  position: relative;

  &:after {
    content: '';
    background-color: hsl(var(--clr-primary-orange));
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 4px;
    clip-path: polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%);
    transition: clip-path 0.2s ease-in;
  }

  &:hover&:after {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 0.4s ease-out;
  }

  ${breakpoints.tabletAndUp} {
  }
`;

export {
  HeaderWrapper,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  IconLinkWrapper,
  NavList,
  NavItem,
};
