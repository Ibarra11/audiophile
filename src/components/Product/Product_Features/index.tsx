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
const Wrapper = styled.div`
  & :not(:last-child) {
    margin-bottom: ${24 / 16}rem;
  }
`;

const Header = styled.h3``;
const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
`;

export default ProductFeatures;
