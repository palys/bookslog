import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { Page } from '../components';
import colors from '../theme/colors';

const HomePage: React.FC = () => {
    const history = useHistory();
    return (
        <Page title="BooksLog">
            <MenuEntry onClick={() => history.push('/books')}>
                Books
            </MenuEntry>
            <MenuEntry>
                Log
            </MenuEntry>
            <MenuEntry>
                Analyze
            </MenuEntry>
        </Page>
    );
};

const MenuEntry = styled.div`
    height: 150px;
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${colors.LIGHT_BLUE};
    cursor: pointer;

    font-size: 40px;
    font-weight: 700;
    color: ${colors.DARK_GRAY};
`;

export default HomePage;