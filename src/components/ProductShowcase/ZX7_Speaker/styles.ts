import styled from 'styled-components/macro';
import breakpoints from '../../../shared/css/breakpoints';
const Wrapper = styled.div`
  position: relative;
  height: ${320 / 16}rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const Picture = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  padding-left: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    padding-left: ${48 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    padding-left: ${96 / 16}rem;
  }
`;

const Title = styled.h3`
  color: hsl(--clr-primary-black);
  font-size: ${28 / 16}rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 32px;
`;

export { Wrapper, Picture, Img, Content, Title };
