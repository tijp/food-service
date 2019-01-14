import styled from 'styled-components';
import React from 'react';

interface IProps {
  title?: string;
}

const StyledSection = styled.section`
  padding: 20px 0;
  @media (max-width: 1088px) {
    padding: 10px 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
`;

const Section: React.SFC<IProps> = ({ children, title }) => (
  <StyledSection>
    { title && <Title>{title}</Title> }

    {children}
  </StyledSection>
)

export default Section;
