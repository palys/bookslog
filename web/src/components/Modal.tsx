import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

interface Props {
    isOpen: boolean;
    onClose?: () => any;
    closeOnClickOutside?: boolean;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, closeOnClickOutside = true, children}) => (
    <Container isOpen={isOpen} onClick={onClose}>
        <ContentContainer>
            {children}
        </ContentContainer>
    </Container>
)

const Container = styled.div`
    display: ${({isOpen}: {isOpen: boolean}) => isOpen ? 'flex' : 'none'};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #00000066;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    padding: 20px;
    background-color: ${colors.LIGHT_BLUE};
    border-radius: 5px;
`;

export default Modal;