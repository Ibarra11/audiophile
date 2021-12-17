import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../shared/css/components';
import Logo from '../../assets/shared/desktop/logo.svg';
import FacebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import TwitterIcon from '../../assets/shared/desktop/icon-twitter.svg';
import InstagramIcon from '../../assets/shared/desktop/icon-instagram.svg';
import {
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
} from './styles';

const Footer = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Wrapper>
      <OrangeInlineBorder />
      <LogoIcon src={Logo} alt="site logo" />
      <Nav>
        <NavLink to="/" isActive={location.pathname === '/'}>
          Home
        </NavLink>
        <NavLink
          to="/headphones"
          isActive={location.pathname === '/headphones'}
        >
          Headphones
        </NavLink>
        <NavLink
          to="/speakers"
          isActive={location.pathname === '/speakers'}
        >
          Speakers
        </NavLink>
        <NavLink
          to="/earphones"
          isActive={location.pathname === '/earphones'}
        >
          Earphones
        </NavLink>
      </Nav>
      <Text>
        Audiophile is an all in one stop to fulfill your audio needs. We're
        a small team of music lovers and sound specialists who are devoted
        to helping you get the most out of personal audio. Come and visit
        our demo facility - we’re open 7 days a week.
      </Text>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      <SocialLinks>
        <SocialLink>
          <Icon src={FacebookIcon} alt="Facebook icon" />
        </SocialLink>
        <SocialLink>
          <Icon src={TwitterIcon} alt="Twitter Icon" />
        </SocialLink>
        <SocialLink>
          <Icon src={InstagramIcon} alt="Instagram Icon" />
        </SocialLink>
      </SocialLinks>
    </Wrapper>
  );
};

export default Footer;
