import styled from 'styled-components';

import { Link, MaxWidthWrapper } from '../../shared/css/components';
import breakpoints from '../../shared/css/breakpoints';
const HeaderLayout = styled(MaxWidthWrapper)`
  margin: auto;
  height: 5rem;
  border-bottom: 1px solid hsl(var(--clr-secondary-gray) / 0.25);
  ${breakpoints.tabletAndUp} {
    margin-inline: 2rem;
  }
  ${breakpoints.laptopAndUp} {
    margin-inline: auto;
  }
`;

const MobileToTablet = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-inline: 1rem;
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
    height: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1110px;
    margin: auto;
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
  HeaderLayout,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  IconLink,
  NavList,
  NavLink,
};
