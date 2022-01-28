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
  height: 40rem;
  background: url(${Mobile_bg});
  background-size: cover;
  background-position: center center;
  margin-bottom: ${40 / 16}rem;
  ${breakpoints.tabletAndUp} {
    background: url(${Tablet_bg});
    background-size: cover;
    background-position: center center;
    margin-bottom: ${94 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    background: url(${Desktop_bg});
    background-size: cover;
    background-position: center left 100px;
    margin-bottom: ${120 / 16}rem;
  }
`;

export default Landing;
