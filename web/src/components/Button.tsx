import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

interface Props {
    disabled?: boolean;
    onClick?: () => any;
}

const Button: React.FC<Props> = ({disabled, onClick, children}) => (
    <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>
);

const StyledButton = styled.button`
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${({disabled}: {disabled?: boolean}) => disabled ? colors.MEDIUM_GRAY : colors.LIGHT_BLUE};
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.DARK_GRAY};
    box-shadow: 1px 1px 2px rgba(0,0,0,0.6);
`;

export default Button;