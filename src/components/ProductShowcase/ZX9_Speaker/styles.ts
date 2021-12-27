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
  top: 0;
  left: 0;
  width: calc(100% + 200px);
  transform: translate(-(calc(100% -50px)), -(calc(100%-20px)));
`;

const ProductImgWrapper = styled.div`
  width: 150px;
`;

const Content = styled.div``;

const FlexContainer = styled.div`
  border: 1px solid red;
  color: hsl(var(--clr-white));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
  width: max(320px, 40%);
  margin: auto;
  height: 75%;
  transform: translateY(10%);
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: clamp(var(--fs-h3), 4vw + 1rem, var(--fs-h1));
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: ${24 / 16}rem;
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
