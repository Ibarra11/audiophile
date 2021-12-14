import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MobileHeaderWrapper = styled.header`
  background-color: hsl(var(--clr-primary-black) / 0.9);
  display: flex;
  justify-content: space-between;
  padding-block: 2rem;
  padding-inline: ${24 / 16}rem;
  border-bottom: 1px solid hsl(var(--clr-secondary-gray) / 0.25);
`;

const MobileHeaderIcon = styled.img`
  display: block;
`;

const MobileHeaderIconButtonWrapper = styled.button`
  position: relative;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`;

const MobileHeaderIconLinkWrapper = styled(Link)``;

export {
  MobileHeaderWrapper,
  MobileHeaderIcon,
  MobileHeaderIconButtonWrapper,
  MobileHeaderIconLinkWrapper,
};
