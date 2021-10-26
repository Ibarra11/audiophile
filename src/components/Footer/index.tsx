import React from 'react';
import {
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
} from './styles';
import FacebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import TwitterIcon from '../../assets/shared/desktop/icon-twitter.svg';
import InstagramIcon from '../../assets/shared/desktop/icon-instagram.svg';
const Footer = () => (
  <Wrapper>
    <OrangeInlineBorder />
    <Header>audiophile</Header>
    <Nav>
      <NavLink>Home</NavLink>
      <NavLink>Headphones</NavLink>
      <NavLink>Speakers</NavLink>
      <NavLink>Earphones</NavLink>
    </Nav>
    <Text>
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
      lovers and sound specialists who are devoted to helping you get the most out of personal
      audio. Come and visit our demo facility - we’re open 7 days a week.
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

export default Footer;
