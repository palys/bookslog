import React from 'react';
import { Page } from '../components';
import Book from '../model/Book';
import Table from '../components/Table';

const books: Book[] = [{
    id: '1',
    title: 'book1',
    pages: 123
  },
  {
    id: '2',
    title: 'book2',
    pages: 456
  }];

const BooksPage: React.FC = () => (
    <Page>
        <Table header={[{
            name: 'Name',
            width: 2
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