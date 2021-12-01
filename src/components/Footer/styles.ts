import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${48 / 16}rem;
  background-color: hsl(var(--clr-primary-black));
  color: hsl(var(--clr-white));
  max-height: ${654 / 16}rem;

  text-align: center;
  padding: ${52 / 16}rem ${24 / 16}rem ${38 / 16}rem;
`;

const LogoIcon = styled.img``;

const Header = styled.h4`
  font-size: ${25 / 16}rem;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavLink = styled(Link)`
  color: hsl(var(--clr-white));
  font-size: var(--text-subtitle);
  text-decoration: none;
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const Text = styled.p`
  color: hsl(var(--clr-primary-gray) / 0.25);
  font-size: var(--text-body);
  font-weight: 200;
`;

const Copyright = styled.p`
  color: hsl(var(--clr-primary-gray) / 0.5);
  font-size: var(--text-body);
  font-weight: 700;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${16 / 16}rem;
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
  Wrapper,
  LogoIcon,
  Header,
  Nav,
  NavLink,
  Text,
  Copyright,
  SocialLinks,
  SocialLink,
  Icon,
  OrangeInlineBorder,
};
