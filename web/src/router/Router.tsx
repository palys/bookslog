import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BooksPage, HomePage, EmptyPage } from '../pages';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/books">
                <BooksPage />
            </Route>
            <Route path="/log">
                <EmptyPage />
            </Route>
            <Route path="/analyze">
                <EmptyPage />
            </Route>
            <Route path="/" exact>
                <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;