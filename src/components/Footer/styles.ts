import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${48 / 16}rem;
  background-color: var(--primary-black);
  color: var(--white);
  max-height: ${654 / 16}rem;
  margin-top: 120px;
  text-align: center;
  padding: ${52 / 16}rem ${24 / 16}rem ${38 / 16}rem;
`;

const Header = styled.h4`
  font-size: ${25 / 16}rem;
  letter-spacing: 1px;
  text-transform: lowercase;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavLink = styled.a`
  color: inherit;
  font-size: ${13 / 16}rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  color: var(--gray-alpha-25);
  font-size: ${15 / 16}rem;
  font-weight: 200;
  line-height: 25px;
`;

const Copyright = styled.p`
  color: var(--gray-alpha-50);
  font-size: ${15 / 16}rem;
  font-weight: 700;
  line-height: 25px;
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
  background-color: var(--dark-orange);
`;

export {
  Wrapper,
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
