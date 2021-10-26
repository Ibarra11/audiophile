import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: ${120 / 16}rem;
  text-align: center;
  padding: 0 ${24 / 16}rem;
`;

const Img = styled.img`
  min-height: ${300 / 16}rem;
  max-height: ${588 / 16}rem;
  border-radius: 8px;
  max-width: 100%;
`;

const Header = styled.h3`
  font-size: ${28 / 16}rem;
  font-weight: 700;
  line-height: 38.25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: ${40 / 16}rem;
  margin-bottom: ${32 / 16}rem;
`;

const Text = styled.p`
  font-size: ${15 / 16}rem;
  font-weight: 200;
  line-height: 25px;
  margin: 0;
  margin-bottom: ${16 / 16}rem;
`;

const TextOrange = styled.span`
  color: var(--dark-orange);
`;

export { Wrapper, Img, Header, Text, TextOrange };
