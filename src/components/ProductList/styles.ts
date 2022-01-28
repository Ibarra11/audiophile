import styled from 'styled-components';
import breakpoints from '../../shared/css/breakpoints';
import { MaxWidthWrapper } from '../../shared/css/components';

const ProductListWrapper = styled.section`
  text-align: center;
`;

const ProductListHeader = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-primary-black) / 0.9);
  padding-block: 1.5em;
  letter-spacing: 2px;
  margin-bottom: ${64 / 16}rem;
  ${breakpoints.tabletAndUp} {
    margin-bottom: ${120 / 16}rem;
  }
`;
const ProductWrapper = styled(MaxWidthWrapper)<{ index: number }>`
  display: flex;
  flex-direction: column;
  gap: ${32 / 16}rem;
  margin-inline: ${24 / 16}rem;
  margin-bottom: ${120 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${48 / 16}rem;
    margin-inline: ${40 / 16}rem;
  }

  ${breakpoints.laptopAndUp} {
    flex-direction: ${(p) => (p.index % 2 === 0 ? 'row' : 'row-reverse')};
    align-items: center;
    gap: ${64 / 16}rem;
    margin-bottom: ${160 / 16}rem;
    margin-inline: auto;
  }
`;

const Picture = styled.picture`
  height: ${352 / 16}rem;
  overflow: hidden;
  ${breakpoints.laptopAndUp} {
    flex: 1;
    height: ${420 / 16}rem;
  }
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${breakpoints.tabletAndUp} {
    object-fit: contain;
    transform: scale(2.25);
  }
  ${breakpoints.laptopAndUp} {
    object-fit: cover;
    transform: scale(1);
  }
`;
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${570 / 16}rem;
  margin-inline: auto;
  gap: ${24 / 16}rem;
  ${breakpoints.laptopAndUp} {
    width: ${445 / 16}rem;
  }
`;

const ProductSubTitle = styled.span`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: 10px;
`;

const ProductTitle = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
`;

const ProductText = styled.p``;

export {
  ProductListWrapper,
  ProductListHeader,
  ProductWrapper,
  Picture,
  ProductImg,
  ProductContent,
  ProductSubTitle,
  ProductText,
  ProductTitle,
};
