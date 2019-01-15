import styled from 'styled-components';

export const Row = styled.div<{ justifyContent?: string, alignItems?: string }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'space-between'};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`;
