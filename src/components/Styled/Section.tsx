import styled from 'styled-components';
import React from 'react';

const StyledSection = styled.section`
  padding: 16px;
`;

const Section: React.SFC = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
)

export default Section;
