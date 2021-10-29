import styled from 'styled-components/macro';
import bg from '../../assets/home/mobile/image-header.jpg';

const HeaderWrapper = styled.header`
  color: hsl(var(--clr-white));
  height: 38rem;
  background: url(${bg});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${32 / 16}rem ${24 / 16}rem;
  border-bottom: 1px solid hsl(var(--clr-primary-gray));
`;

const HeaderIcon = styled.img`
  position: relative;
`;

const HeaderLogo = styled.img``;

const HeaderIconWrapper = styled.div`
  display: flex;
  padding-top: 3px;
`;

const HeaderBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  padding-left: ${24 / 16}rem;
  padding-right: ${23 / 16}rem;
`;

const HeaderBodySubHeading = styled.span`
  color: hsl(var(--clr-white) / 0.5);
  font-size: var(--text-overline);
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: ${16 / 16}rem;
`;

const HeaderBodyMainHeading = styled.h1`
  font-size: clamp(${36 / 16}rem, 6vw + 1rem, var(--fs-h1));
  margin-bottom: ${24 / 16}rem;
`;

const HeaderBodyText = styled.p`
  color: hsl(var(--clr-white) / 0.75);
  font-size: var(--text-body);
  font-weight: 200;
  margin-bottom: ${28 / 16}rem;
`;

export {
  HeaderWrapper,
  HeaderMain,
  HeaderLogo,
  HeaderIcon,
  HeaderIconWrapper,
  HeaderBody,
  HeaderBodySubHeading,
  HeaderBodyMainHeading,
  HeaderBodyText,
};
