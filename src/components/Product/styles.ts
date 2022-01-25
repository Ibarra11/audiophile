import styled from 'styled-components';
import breakpoints from '../../shared/css/breakpoints';
const SectionWrapper = styled.section`
  & h3 {
    font-size: clamp(${24 / 16}rem, 2vw + 1rem, var(--fs-h3));
  }
  margin-bottom: ${120 / 16}rem;
  padding-inline: ${24 / 16}rem;
  & > :not(:last-child) {
    margin-bottom: ${88 / 16}rem;

    ${breakpoints.tabletAndUp} {
      margin-bottom: ${120 / 16}rem;
    }
    ${breakpoints.laptopAndUp} {
      margin-bottom: ${160 / 16}rem;
    }
  }
  ${breakpoints.tabletAndUp} {
  }
  ${breakpoints.laptopAndUp} {
    margin-bottom: ${160 / 16}rem;
  }
`;

const PrevLink = styled.a`
  display: inline-block;
  color: hsl(var(--clr-primary-black));
  text-decoration: none;
  margin-top: ${16 / 16}rem;
  margin-bottom: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    margin-top: ${32 / 16}rem;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${32 / 16}rem;
  align-items: center;
  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
    align-items: center;
    gap: ${48 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    gap: ${72 / 16}rem;
  }
`;

const Picture = styled.picture`
  height: ${352 / 16}rem;
  ${breakpoints.tabletAndUp} {
    height: ${480 / 16}rem;
    overflow: hidden;
  }
  ${breakpoints.laptopAndUp} {
    height: ${560 / 16}rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${88 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${120 / 16}rem;
  }
`;
const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  ${breakpoints.tabletAndUp} {
    transform: scale(1.25);
  }
`;

const ProductContent = styled.div`
  ${breakpoints.tabletAndUp} {
    flex: 1;
  }
`;

const ProductFeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${88 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${120 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    flex-direction: revert;
  }
`;

const ProductSubHeading = styled.span`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--fs-text-subtitle);
  text-transform: uppercase;
  letter-spacing: 10px;
`;
const ProductHeading = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  margin-block: ${24 / 16}rem;
`;

const Text = styled.p``;

const ProductPrice = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: ${24 / 16}rem;
  margin-bottom: 2rem;
  gap: 5px;
`;

const ProductButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: ${25 / 16}rem;
`;

const ButtonCounterWrapper = styled.div`
  height: ${48 / 16}rem;
  width: ${120 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(var(--clr-primary-gray));
  padding-inline: ${15 / 16}rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: hsl(var(--clr-primary-black) / 0.4);
`;

const ButtonIncrement = styled(Button)``;

const ButtonDecrement = styled(Button)``;

const CountValue = styled.span`
  font-size: ${15 / 16}rem;
  font-weight: 700;
`;

export {
  SectionWrapper,
  FlexWrapper,
  PrevLink,
  ProductWrapper,
  Picture,
  ProductImg,
  ProductContent,
  ProductHeading,
  ProductFeatureBox,
  ProductSubHeading,
  Text,
  ProductPrice,
  ProductButtons,
  ButtonCounterWrapper,
  ButtonIncrement,
  ButtonDecrement,
  CountValue,
};
