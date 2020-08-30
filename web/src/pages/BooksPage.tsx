import React from 'react';
import { Page } from '../components';
import Book from '../model/Book';
import Table from '../components/Table';

interface Props {
    books: Book[];
}

const BooksPage: React.FC<Props> = ({ books }) => (
    <Page title="Books">
        <Table header={[{
            name: 'Name',
            width: 1
        },
        {
            name: 'Pages',
            width: 1
        }]} 
        rows={books.map(({id, title, pages}) => ({
            id,
            entries: [title, pages]
        }))} />
    </Page>
);

export default BooksPage;