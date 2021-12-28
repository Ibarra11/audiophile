import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
const ShowcaseWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${32 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    gap: ${48 / 16}rem;
  }
`;

export { ShowcaseWrapper };
