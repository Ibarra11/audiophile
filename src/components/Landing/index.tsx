import React from 'react';
import styled from 'styled-components/macro';

import Hero from '../Hero';
import breakpoints from '../../shared/css/breakpoints';
import Desktop_bg from '../../assets/home/desktop/image-hero.jpg';
import Tablet_bg from '../../assets/home/tablet/image-header.jpg';
import Mobile_bg from '../../assets/home/mobile/image-header.jpg';
const Landing = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 45rem;
  background: url(${Mobile_bg});
  background-size: cover;
  background-position: center center;

  ${breakpoints.tabletAndUp} {
    background: url(${Tablet_bg});
    background-size: cover;
    background-position: center center;
  }
  ${breakpoints.laptopAndUp} {
    background: url(${Desktop_bg});
    background-size: cover;
    background-position: center left;
  }
`;

export default Landing;
