import React from 'react';
import styled from 'styled-components';
import COLORS from '../assets/colors';

const StyledButton = styled.button<{ small?: boolean }>`
  display: inline-block;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;

  font-weight: 700;
  border-radius: 4px;
  user-select: none;
  white-space: nowrap;
  transition: all .3s cubic-bezier(.645,.045,.355,1);

  color: #fff;
  border: none;
  background-color: ${COLORS.PRIMARY_COLOR};
  text-shadow: 0 -1px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 0 rgba(0,0,0,.035);

  height: ${props => props.small ? '38px' : '44px'};
  font-size: ${props => props.small ? '16px' : '18px'};
  padding: ${props => props.small ? '0 15px' : '0 25px'};

  &:hover {
    border-color: ${COLORS.SECONDARY_COLOR};
    background-color: ${COLORS.SECONDARY_COLOR};
  }
`;

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  small?: boolean;
  onClick?: () => void;
}

const Button: React.SFC<IProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default Button;
