import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 85vw;
  isolation: isolate;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const Img = styled.img`
  position: absolute;
  left: -24px;
  z-index: -1;
  width: calc(100% + 24px);
  height: 100%;
`;

const Content = styled.div``;

const Title = styled.h3`
  color: var(--primary-black);
  font-size: ${28 / 16}rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 32px;
`;

export { Wrapper, Img, Content, Title };
