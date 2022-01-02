import styled from 'styled-components';
interface ProductFeaturesProps {
  features: string[];
}
const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <Wrapper>
      <Header>Features</Header>
      {features.map((feature, i) => {
        return <Text key={i}>{feature}</Text>;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const Header = styled.h3`
  margin-bottom: ${24 / 16}rem;
`;
const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  &:first-of-type {
    margin-bottom: ${16 / 16}rem;
  }
`;

export default ProductFeatures;
