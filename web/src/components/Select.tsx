import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    label?: string;
    valueId?: string;
    options: Array<{
        id: string;
        value: string;
    }>;
    onChange?: (value: string) => any;
}

const Select: React.FC<Props> = ({ label, valueId = -1, options, onChange }) => {
    const [id] = useState(Math.random().toString(36));
    return (
        <Container>
            {label && <label htmlFor={id}>{label}</label>}
            <select id={id} value={valueId} onChange={e => onChange?.(e.target.value)}>
                <option disabled value={-1}>select...</option>
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