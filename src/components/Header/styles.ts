import styled from 'styled-components';
import bg from '../../assets/home/mobile/image-header.jpg';

const HeaderWrapper = styled.header`
  color: hsl(var(--clr-white));
  height: 80%;
  width: 100%;
  background: url(${bg});
  background-size: cover;
  background-position: center center;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid hsl(var(--clr-primary-gray));
  padding: 32px 24px;
`;

const Title = styled.h2`
  font-size: ${24 / 16}rem;
  margin: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  padding-top: 3px;
`;

const HeaderBody = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

const HeaderBodySubHeading = styled.h6`
  font-size: ${14 / 16}rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 50%;
  margin: 0;
  margin-bottom: 16px;
`;

const HeaderBodyMainHeading = styled.h1`
  font-size: ${36 / 16}rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 24px;
`;

const HeaderBodyText = styled.p`
  font-size: ${15 / 16}rem;
  line-height: 25px;
  margin: 0;
  margin-bottom: 28px;
  font-weight: 200;
  opacity: 0.75;
`;

export {
  HeaderWrapper,
  HeaderMain,
  Title,
  IconWrapper,
  HeaderBody,
  HeaderBodySubHeading,
  HeaderBodyMainHeading,
  HeaderBodyText,
};
