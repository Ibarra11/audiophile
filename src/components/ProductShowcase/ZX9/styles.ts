import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;
  background-color: hsl(var(--clr-orange));
  height: 600px;
  padding: 2px 3px 0 4px;
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
`;

const CircleWrapper = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const OuterCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -120px;
  margin: 0 auto;
  height: 558px;
  width: 558px;
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 73%, 0.62);
`;

const MiddleCircle = styled.div`
  position: absolute;
  top: 120px;
  margin-top: -2%;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 73%, 0.62);
`;

const InnerCircle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 279px;
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 73%, 0.62);
`;

const ProductImg = styled.img`
  width: 55%;
`;

const Content = styled.div`
  margin-top: -3%;
  height: 100%;
  padding: 0 23px;
  padding-bottom: 55px;
  color: hsl(var(--clr-white));
  text-align: center;
`;

const Title = styled.h3`
  font-size: ${36 / 16}rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1vw;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: ${15 / 16}rem;
  font-weight: 200;
  line-height: 25px;
  margin-bottom: 24px;
`;

export {
  Wrapper,
  CircleWrapper,
  OuterCircle,
  MiddleCircle,
  InnerCircle,
  ProductImg,
  Content,
  Text,
  Title,
};
