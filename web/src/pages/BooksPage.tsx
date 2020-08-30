import React from 'react';
import { Page } from '../components';
import Book from '../model/Book';

interface Props {
    books: Book[];
}

const BooksPage: React.FC<Props> = ({ books }) => (
    <Page title="Books">
        {books.map(({id, title, pages}) => (
            <div key={id}>
                {title} {pages}
            </div>
        ))}
    </Page>
);

export default BooksPage;