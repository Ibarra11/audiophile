import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import breakpoints from '../../shared/css/breakpoints';
const ProductsNavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: ${120 / 16}rem;
  padding-inline: ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${10 / 16}rem;
    padding-inline: ${40 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    gap: ${30 / 16}rem;
    margin-bottom: ${160 / 16}rem;
    padding-inline: 0;
  }
`;

const MobileProductsNavWrapper = styled(motion.nav)`
  padding: ${32 / 16}rem ${24 / 16}rem ${35 / 16}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
    align-items: center;
  }
`;

const Product = styled.div`
  isolation: isolate;
  position: relative;
  flex: 1;
  flex-basis: ${225 / 16}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: clamp(217px, 30vw, 284px);
  padding-bottom: ${22 / 16}rem;
`;

const MobileProduct = styled(motion.div)`
  height: 30%;
  flex: 1;
  isolation: isolate;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: ${12 / 16}rem;
  ${breakpoints.tabletAndUp} {
    height: 75%;
  }
`;

const ProductImg = styled.img`
  height: 80%;
`;

const MobileProductImg = styled.img`
  height: 10vh;
  ${breakpoints.tabletAndUp} {
    height: 75%;
  }
`;

const ProductTitle = styled.h5`
  font-size: ${15 / 16}rem;
  letter-spacing: 2px;
  margin-top: -2rem;
`;

const ProductBackground = styled.span`
  z-index: -1;
  position: absolute;
  inset: 25% 0 0 0;
  background-color: hsla(var(--clr-primary-gray) / 0.25);
  border-radius: 8px;
`;

export {
  ProductsNavWrapper,
  Product,
  ProductImg,
  ProductTitle,
  ProductBackground,
  MobileProductsNavWrapper,
  MobileProduct,
  MobileProductImg,
};
