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
            name: 'Title',
            width: 14
        },
        {
            name: 'Pages',
            width: 4
        }]} 
        rows={books.map(({id, title, pages}) => ({
            id,
            entries: [title, pages]
        }))} 
        onAdd={() => {}}
        />
    </Page>
);

export default BooksPage;