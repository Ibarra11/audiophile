import React from 'react';
import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
interface IRadioGroup {
  heading: string;
  children: React.ReactNode;
}
const RadioGroup = ({ heading, children }: IRadioGroup) => (
  <RadioGroupGrid>
    <RadioGroupHeading>{heading}</RadioGroupHeading>
    {children}
  </RadioGroupGrid>
);
const RadioGroupGrid = styled.div`
  display: grid;
  gap: ${16 / 16}rem;
  margin-bottom: ${24 / 16}rem;

  ${breakpoints.tabletAndUp} {
    grid-column: 1/-1;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RadioGroupHeading = styled.p`
  grid-row: span 2;
  font-size: ${12 / 16}rem;
  font-weight: 700;
`;

export default RadioGroup;
