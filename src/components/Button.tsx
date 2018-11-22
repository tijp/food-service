import React from 'react';
import styled from 'styled-components';
import COLORS from '../assets/colors';

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;

  height: 44px;
  padding: 0 25px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  user-select: none;
  white-space: nowrap;
  transition: all .3s cubic-bezier(.645,.045,.355,1);

  color: #fff;
  border-color: ${COLORS.PRIMARY_COLOR};
  background-color: ${COLORS.PRIMARY_COLOR};
  text-shadow: 0 -1px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 0 rgba(0,0,0,.035);

  &:hover {
    border-color: ${COLORS.SECONDARY_COLOR};
    background-color: ${COLORS.SECONDARY_COLOR};
  }
`;

interface IProps {
  text: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ text, ...props }) => (
  <StyledButton {...props}>{text}</StyledButton>
)

export default Button;
