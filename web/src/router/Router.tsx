import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BooksPage } from '../pages';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/books">
                <BooksPage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;