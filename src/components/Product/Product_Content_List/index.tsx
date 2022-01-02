import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../shared/css/breakpoints';
interface ProductContentListProps {
  contents: { content: string; amount: number }[];
}

const ProductContentList = ({ contents }: ProductContentListProps) => {
  return (
    <Wrapper>
      <Heading>In the Box</Heading>
      <ContentList>
        {contents.map((item) => {
          return (
            <Item key={item.content}>
              <ItemType>
                <ItemAmount>{item.amount}x</ItemAmount> {item.content}
              </ItemType>
            </Item>
          );
        })}
      </ContentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;

  ${breakpoints.tabletAndUp} {
    width: 75%;
    flex-direction: revert;
    gap: ${12 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    width: 100%;
    flex-direction: column;
    gap: ${32 / 16}rem;
  }
`;
const Heading = styled.h3`
  ${breakpoints.tabletAndUp} {
    flex: 1;
  }
  ${breakpoints.laptopAndUp} {
    flex: 0;
  }
`;
const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  ${breakpoints.tabletAndUp} {
    flex: 1;
  }
  ${breakpoints.laptopAndUp} {
    flex: 0;
  }
`;
const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${8 / 16}rem;
  }
`;
const ItemType = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
`;
const ItemAmount = styled.span`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--fs-text-body);
  font-weight: 700;
  margin-right: ${21 / 16}rem;
`;
export default ProductContentList;
