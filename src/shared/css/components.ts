import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  position: relative;

  &:after {
    content: '';
    background-color: hsl(var(--clr-primary-orange));
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    clip-path: polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%);
    transition: clip-path 0.2s ease-in;
  }

  &:hover&:after {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 0.4s ease-out;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 1110px;
  margin: auto;
`;
export { Link, MaxWidthWrapper };
