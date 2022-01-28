import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
import { MaxWidthWrapper } from '../../shared/css/components';
const HeaderHeroWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-inline: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    margin-inline: 2rem;
    justify-content: center;
  }
  ${breakpoints.laptopAndUp} {
    margin-inline: auto;
    justify-content: flex-start;
    padding-inline: 0;
  }
`;

const HeaderHeroBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  max-width: ${380 / 16}rem;
  text-align: center;
  ${breakpoints.laptopAndUp} {
    align-items: flex-start;
    text-align: left;
  }
`;
const HeaderHeroBodyMainHeading = styled.h1`
  color: hsl(var(--clr-white));
  font-size: clamp(${36 / 16}rem, 6vw + 1rem, var(--fs-h1));
  margin-bottom: ${24 / 16}rem;
`;

const HeaderHeroBodySubHeading = styled.span`
  color: hsl(var(--clr-white) / 0.5);
  font-size: var(--text-overline);
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const HeaderHeroBodyText = styled.p`
  color: hsl(var(--clr-white) / 0.75);
  font-size: var(--text-body);
  font-weight: 200;
  margin-bottom: ${28 / 16}rem;
`;

export {
  HeaderHeroWrapper,
  HeaderHeroBody,
  HeaderHeroBodySubHeading,
  HeaderHeroBodyMainHeading,
  HeaderHeroBodyText,
};
