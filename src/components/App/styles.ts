import styled from 'styled-components/macro';

import breakpoints from '../../shared/css/breakpoints';
const AppContainer = styled.div`
  height: 100%;
  background-color: #f2f2f2;
`;

const LayoutWrapper = styled.div`
  padding-inline: ${24 / 16}rem;

  padding-top: ${40 / 16}rem;
  padding-bottom: ${120 / 16}rem;
  & > :not(:last-child) {
    margin-bottom: ${120 / 16}rem;
    ${breakpoints.tabletAndUp}{
      margin-bottom: ${96 / 16}rem;
    }
    ${breakpoints.laptopAndUp}{
      margin-bottom: ${168 / 16}rem;
    }
  }
  ${breakpoints.tabletAndUp} {
    padding-inline: {40/16}rem;
    padding-block: ${96 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    padding-inline: 0;
    padding-top: ${120 / 16}rem;
    padding-bottom: ${200 / 16}rem;
  }
`;
export { AppContainer, LayoutWrapper };
