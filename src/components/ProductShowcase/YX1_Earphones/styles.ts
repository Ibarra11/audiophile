import styled from 'styled-components/macro';
import breakpoints from '../../../shared/css/breakpoints';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;
  height: ${424 / 16}rem;

  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
    gap: ${12 / 16}rem;
    height: ${320 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    gap: ${32 / 16}rem;
  }
`;

const Picture = styled.picture`
  flex: 1;
  height: 50%;
  overflow: hidden;
  border-radius: 8px;
  ${breakpoints.tabletAndUp} {
    height: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  height: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: hsl(var(--clr-primary-gray));
  padding-left: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    height: 100%;
    padding-left: ${48 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    height: 100%;
    padding-left: ${96 / 16}rem;
  }
`;

const Title = styled.h3`
  font-size: ${28 / 16}rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 38.25px;
  margin-bottom: 32px;
`;

export { Wrapper, Picture, Img, Content, Title };
