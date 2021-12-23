import styled from 'styled-components';

import { Link } from '../../shared/css/components';
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
    max-width: 1110px;
    margin: auto;
    justify-content: space-between;
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

const NavList = styled.nav`
  display: flex;
  gap: 3rem;
`;
const NavLink = styled(Link)`
  color: hsl(var(--clr-white));
  font-size: var(--fs-text-subtitle);
  text-transform: uppercase;
  text-decoration: none;
`;

const Icon = styled.img`
  display: block;
`;

const IconLink = styled(Link)``;

export {
  HeaderWrapper,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  IconLink,
  NavList,
  NavLink,
};
