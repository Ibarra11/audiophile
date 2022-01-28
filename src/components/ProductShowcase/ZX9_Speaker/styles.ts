import styled from 'styled-components/macro';
import breakpoints from '../../../shared/css/breakpoints';

const Wrapper = styled.div`
  position: relative;
  background-color: hsl(var(--clr-primary-orange));
  height: 600px;
  padding: 2px 3px 0 4px;
  border-radius: 8px;
  isolation: isolate;
  overflow: hidden;
`;

const CircleImgWrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 30rem;
  height: 30rem;
  transform: translateX(-50%) translateY(-20%);
  & > img {
    height: 100%;
  }
  ${breakpoints.tabletAndUp} {
    width: 40rem;
    height: 40rem;
    transform: translateX(-50%) translateY(-30%);
  }
  ${breakpoints.laptopAndUp} {
    left: 0;
    bottom: 0;
    transform: translate(0, 0);
    width: 75%;
    height: 150%;
    transform: translateY(30%);
    & > img {
      transform: translateX(-20%);
    }
  }
`;

const ProductImgWrapper = styled.div`
  width: 150px;
  ${breakpoints.laptopAndUp} {
    width: ${400 / 16}rem;
    & > img {
      transform: scale(1.4) translateY(15%);
    }
  }
`;

const Content = styled.div`
  ${breakpoints.laptopAndUp} {
    width: 20rem;
  }
`;

const FlexContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-20%);
  color: hsl(var(--clr-white));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: auto;
  padding: 0 1rem;
  text-align: center;
  ${breakpoints.tabletAndUp} {
    gap: 3rem;
  }
  ${breakpoints.laptopAndUp} {
    flex-direction: revert;
    height: 75%;
    width: 100%;
    transform: translateX(0) translateY(0);
    left: 0;
    top: 0;
    gap: ${140 / 16}rem;
    transform: translateX(15%);
  }
`;

const Title = styled.h3`
  font-size: clamp(var(--fs-h3), 4vw + 1rem, var(--fs-h1));
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: ${24 / 16}rem;
  letter-spacing: 2px;
`;

const Text = styled.p`
  color: hsl(var(--clr-white) / 0.5);
  font-size: var(--text-body);
  font-weight: 200;
  margin-bottom: ${24 / 16}rem;
`;

export {
  Wrapper,
  ProductImgWrapper,
  CircleImgWrapper,
  FlexContainer,
  Content,
  Text,
  Title,
};
