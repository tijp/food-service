import styled from 'styled-components';

export const Row = styled.div<{ justifyContent?: string, alignItems?: string }>`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'space-between'};
`;
