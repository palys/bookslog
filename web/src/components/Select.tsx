import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    label?: string;
    value?: {
        id: string;
        value: string;
    };
    options: Array<{
        id: string;
        value: string;
    }>;
    onChange?: (value: string) => any;
}

const Select: React.FC<Props> = ({ label, value, options, onChange }) => {
    const [id] = useState(Math.random().toString(36));
    return (
        <Container>
            {label && <label htmlFor={id}>{label}</label>}
            <select id={id} value={value?.id} onChange={e => onChange?.(e.target.value)}>
                {options.map(option => (
                    <option value={option.id} key={option.id}>{option.value}</option>
                ))}
            </select>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Select;