import React from 'react';
import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
interface IFormGroup {
  heading: string;
  children: React.ReactNode;
}
const FormGroup = ({ heading, children }: IFormGroup) => {
  return (
    <Wrapper>
      <FormGroupHeader>{heading}</FormGroupHeader>
      <FormGroupGrid>{children}</FormGroupGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${32 / 16}rem;
    ${breakpoints.tabletAndUp} {
      margin-bottom: ${52 / 16}rem;
    }
  }
`;

const FormGroupGrid = styled.div`
  display: grid;
  gap: ${24 / 16}rem;

  ${breakpoints.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroupHeader = styled.h6`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--text-subtitle);
  margin-bottom: 16px;
`;

export default FormGroup;
