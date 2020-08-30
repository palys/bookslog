import React from 'react';

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

const Table: React.FC<Props> = ({ header, rows }) => (
    <table>
        <tr>
            {header.map(entry => (
                <th key={entry.name}>
                    {entry.name}
                </th>
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
    </table>
);

export default Table;