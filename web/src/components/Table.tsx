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
}

const Table: React.FC<Props> = ({ header, rows }) => {
    const totalWidth = header.map(entry => entry.width).reduce((a, b) => a + b, 0);
    return (
        <StyledTable>
            <tr>
                {header.map(entry => (
                    <Header key={entry.name} width={100 * entry.width / totalWidth}>
                        {entry.name}
                    </Header>
                ))}
            </tr>
            {rows.map(row => (
                <tr key={row.id}>
                    {row.entries.map((entry, i) => (
                        <td key={header[i].name}>
                            {entry}
                        </td>
                    ))}
                </tr>
            ))}
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