import React, { useState } from 'react';
import { Page, Button, Modal, AddBookForm } from '../components';
import Book from '../model/Book';
import styled from 'styled-components';
import colors from '../theme/colors';

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

const BooksPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <Page>
            <TitleRow>
                <Title>
                    Books
            </Title>
                <Button onClick={() => setModalOpen(true)}>+ Add new</Button>
            </TitleRow>
            <table>
                <tr>
                    <Header width={1} />
                    <Header width={10}>Title</Header>
                    <Header width={8}>Authors</Header>
                    <Header width={4}>Number of pages</Header>
                </tr>
                {books.map((book, i) => (
                    <tr key={book.id}>
                        <td>{i + 1}.</td>
                        <td>{book.title}</td>
                        <td>{book.authors.map(({ name }) => name).join(', ')}</td>
                        <td>{book.numberOfPages}</td>
                    </tr>
                ))}
            </table>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <AddBookForm />
            </Modal>
        </Page>
    );
};

const TitleRow = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.span`
    color: ${colors.DARK_GRAY};
    font-size: 40px;
    font-weight: 700;
`;

const Header = styled.th`
    text-align: left;
    width: ${({width}: {width: number}) => width}%;
`;

export default BooksPage;