import styled from 'styled-components';
import { Link, MaxWidthWrapper } from '../../shared/css/components';
import breakpoints from '../../shared/css/breakpoints';
const HeaderLayout = styled.div`
  background-color: hsl(var(--clr-primary-black) / 0.9);
  margin: auto;
  height: 5rem;

  ${breakpoints.tabletAndUp} {
    padding-inline: 2rem;
  }
  ${breakpoints.laptopAndUp} {
    padding-inline: 0;
  }
`;

const MobileToTablet = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-inline: 1rem;
  border-bottom: 1px solid hsl(var(--clr-secondary-gray) / 0.25);
  ${breakpoints.tabletAndUp} {
    gap: 4rem;
    padding-inline: 0;
  }

  ${breakpoints.laptopAndUp} {
    display: none;
  }
`;

const LaptopToDesktop = styled(MaxWidthWrapper)`
  display: none;
  border-bottom: 1px solid hsl(var(--clr-secondary-gray) / 0.25);

  ${breakpoints.laptopAndUp} {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;

const IconButtonWrapper = styled.button`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
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

const CartAmount = styled.span`
  position: absolute;
  top: -8px;
  right: -4px;
  display: grid;
  place-content: center;
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-primary-orange));
  border-radius: 50%;
  font-size: 12px;
  width: 1.1rem;
  height: 1.1rem;
  padding-top: 1px;
`;

export {
  HeaderLayout,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  NavList,
  NavLink,
  CartAmount,
};
