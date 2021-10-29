import styled from 'styled-components/macro';

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

const Header = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  letter-spacing: 1px;
  margin-top: ${40 / 16}rem;
  margin-bottom: ${32 / 16}rem;
`;

const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  font-weight: 200;
  margin: 0;
  margin-bottom: ${25 / 16}rem;
`;

const TextOrange = styled.span`
  color: hsl(var(--clr-primary-orange)); ;
`;

export { Wrapper, Img, Header, Text, TextOrange };
