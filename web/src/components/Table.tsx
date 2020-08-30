import React from 'react';
import styled from 'styled-components';

export interface HeaderEntry {
    name: string;
    width: number;
}

export interface RowEntry {
    id: string;
    entries: Array<string | number>;
}

interface Props {
    header: HeaderEntry[];
    rows: RowEntry[];
    onAdd?: () => void;
}

const Table: React.FC<Props> = ({ header, rows, onAdd }) => {
    const totalWidth = header.map(entry => entry.width).reduce((a, b) => a + b, 0) + 1;
    return (
        <StyledTable>
            <tr>
                <Header width={1 / totalWidth} />
                {header.map(entry => (
                    <Header key={entry.name} width={100 * entry.width / totalWidth}>
                        {entry.name}
                    </Header>
                ))}
            </tr>
            {rows.map((row, i) => (
                <tr key={row.id}>
                    <td>{i + 1}.</td>
                    {row.entries.map((entry, i) => (
                        <td key={header[i].name}>
                            {entry}
                        </td>
                    ))}
                </tr>
            ))}
            {onAdd && (
                <tr>
                    <td>
                        <button>+</button>
                    </td>
                    {header.map(entry => (
                        <td key={entry.name} width={100 * entry.width / totalWidth}>
                            <input />
                        </td>
                    ))}
                </tr>
            )}
        </StyledTable>
    );
};

const StyledTable = styled.table`
    width: 100%;
`;

const Header = styled.th`
    text-align: left;
    width: ${({width}: {width: number}) => width}%;
`;

export default Table;