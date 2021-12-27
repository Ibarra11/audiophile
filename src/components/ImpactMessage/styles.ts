import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-block: ${120 / 16}rem;
  padding: 0 ${24 / 16}rem;

  ${breakpoints.tabletAndUp} {
    margin-block: ${96 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    flex-direction: row-reverse;
    align-items: center;
    gap: ${120 / 16}rem;
    height: ${588 / 16}rem;
  }
`;

const Picture = styled.picture`
  flex: 1;
  height: ${320 / 16}rem;
  border-radius: 8px;
  overflow: hidden;
  ${breakpoints.laptopAndUp} {
    height: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  ${breakpoints.tabletAndUp} {
    width: 75%;
    margin: auto;
  }
  ${breakpoints.laptopAndUp} {
    width: 100%;
  }
`;

const Header = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  letter-spacing: 1px;
  margin-top: ${40 / 16}rem;
  margin-bottom: ${32 / 16}rem;
  ${breakpoints.tabletAndUp} {
    margin-top: ${62 / 16}rem;
  }
`;

const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  font-weight: 200;
  margin-bottom: ${25 / 16}rem;
`;

const TextOrange = styled.span`
  color: hsl(var(--clr-primary-orange)); ;
`;

export { Wrapper, Content, Picture, Img, Header, Text, TextOrange };
