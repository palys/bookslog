import React from 'react';
import styled from 'styled-components';
import { BooksPage } from './pages';
import Book from './model/Book';

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

const App = () => (
  <BooksPage books={books} />
);

export default App;
