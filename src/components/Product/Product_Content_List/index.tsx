import React from 'react';
import styled from 'styled-components';

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
`;
const Heading = styled.h3``;
const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  font-size: var(--fs-text);
  font-weight: 700;
  margin-right: ${21 / 16}rem;
`;
export default ProductContentList;
