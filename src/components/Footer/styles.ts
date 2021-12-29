import styled from 'styled-components/macro';
import { Link, MaxWidthWrapper } from '../../shared/css/components';
import breakpoints from '../../shared/css/breakpoints';
const Container = styled.footer`
  position: relative;
  background-color: hsl(var(--clr-primary-black));
  color: hsl(var(--clr-white));
  max-height: ${654 / 16}rem;
`;

const ContentWrapper = styled(MaxWidthWrapper)`
  position: relative;

  display: grid;
  grid-template-areas:
    'logo'
    'nav'
    'text'
    'copyright'
    'social-links';
  justify-items: center;
  gap: ${48 / 16}rem;
  text-align: center;
  padding: ${52 / 16}rem ${24 / 16}rem ${38 / 16}rem;
  &:after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    background-color: hsl(var(--clr-primary-orange));
    height: ${4 / 16}rem;
    width: ${100 / 16}rem;
  }
  ${breakpoints.tabletAndUp} {
    grid-template-rows: repeat(3, auto) 16px;
    grid-template-areas:
      'logo logo'
      'nav nav'
      'text text'
      '. .'
      'copyright social-links ';
    gap: ${32 / 16}rem;
    justify-items: start;
    padding: ${60 / 16}rem ${40 / 16}rem ${46 / 16}rem;
    text-align: left;
    &:after {
      left: ${40 / 16}rem;
      transform: translateX(0);
    }
  }
  ${breakpoints.laptopAndUp} {
    gap: ${36 / 16}rem;
    grid-template-rows: auto auto 20px auto;
    grid-template-areas:
      'logo nav'
      'text social-links'
      '. . '
      'copyright copyright';
    padding-inline: 0;
    padding-top: ${75 / 16}rem;
    padding-bottom: ${48 / 16}rem;
    &:after {
      left: 0;
    }
  }
`;

const LogoIcon = styled.img`
  grid-area: logo;
`;

const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
    gap: ${34 / 16}rem;
  }
`;

const NavLink = styled(Link)<{ active: 1 | -1 }>`
  color: hsl(
    ${(p) =>
      p.active === 1 ? 'var(--clr-primary-orange)' : 'var(--clr-white)'}
  );
  font-size: var(--text-subtitle);
  text-decoration: none;
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const Text = styled.p`
  grid-area: text;
  color: hsl(var(--clr-primary-gray) / 0.5);
  font-size: var(--text-body);
  font-weight: 200;
`;

const Copyright = styled.p`
  grid-area: copyright;
  color: hsl(var(--clr-primary-gray) / 0.5);
  font-size: var(--text-body);
  font-weight: 700;
`;

const SocialLinks = styled.div`
  grid-area: social-links;
  display: flex;
  justify-content: center;
  gap: ${16 / 16}rem;
  ${breakpoints.tabletAndUp} {
    justify-self: end;
  }
  ${breakpoints.laptopAndUp} {
    align-self: end;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
`;

const Icon = styled.img``;

const OrangeInlineBorder = styled.span`
  height: 4px;
  width: 101px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: hsl(var(--clr-orange)); ;
`;

export {
  Container,
  ContentWrapper,
  LogoIcon,
  Nav,
  NavLink,
  Text,
  Copyright,
  SocialLinks,
  SocialLink,
  Icon,
  OrangeInlineBorder,
};
