import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: min(424px, 750px);
`;

const Img = styled.img`
  height: calc(50% - 12px);
  width: 100%;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(50% - 12px);
  border-radius: 8px;
  background-color: hsl(var(--clr-primary-gray));
  padding-left: 24px;
`;

const Title = styled.h3`
  font-size: ${28 / 16}rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 38.25px;
  margin: 0;
  margin-bottom: 32px;
`;

export { Wrapper, Img, Content, Title };
