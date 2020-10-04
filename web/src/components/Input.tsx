import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    type?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => any;
}

const Input: React.FC<Props> = ({ label, value, onChange, type = 'text' }) => {
    const [id] = useState(Math.random().toString(36));
    return (
        <Container>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} value={value} onChange={e => onChange?.(e.target.value)}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Input;