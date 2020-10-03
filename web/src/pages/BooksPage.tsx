import React from 'react';
import { Page } from '../components';
import Book from '../model/Book';
import Table from '../components/Table';

const books: Book[] = [{
    id: '1',
    title: 'book1',
    numberOfPages: 123,
    authors: [{
        id: '11',
        name: 'author1'
    }]
  },
  {
    id: '2',
    title: 'book2',
    numberOfPages: 456,
    authors: [{
        id: '11',
        name: 'author1'
    },
    {
        id: '12',
        name: 'author2'
    }]
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
        rows={books.map(({id, title, numberOfPages}) => ({
            id,
            entries: [title, numberOfPages]
        }))} 
        onAdd={() => {}}
        />
    </Page>
);

export default BooksPage;