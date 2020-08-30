import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BooksPage, HomePage } from '../pages';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/books">
                <BooksPage />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;