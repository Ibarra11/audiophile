import Logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';
import Button from '../Buttons';
import {
  HeaderWrapper,
  HeaderMain,
  HeaderLogo,
  HeaderIcon,
  HeaderBody,
  HeaderBodySubHeading,
  HeaderBodyMainHeading,
  HeaderBodyText,
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <HeaderIcon src={HamburgerMenu} />
        <HeaderLogo src={Logo} alt="audiophile logo img" />
        <HeaderIcon src={ShoppingCart} />
      </HeaderMain>
      <HeaderBody>
        <HeaderBodySubHeading>new product</HeaderBodySubHeading>
        <HeaderBodyMainHeading>xx99 mark II headphones</HeaderBodyMainHeading>
        <HeaderBodyText>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast
        </HeaderBodyText>
        <Button id={'btn1'}>See Product</Button>
      </HeaderBody>
    </HeaderWrapper>
  );
};

export default Header;
