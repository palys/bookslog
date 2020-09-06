import React from 'react';
import { useHistory, NavLink } from "react-router-dom";
import styled from 'styled-components';

import colors from '../theme/colors';

const Page: React.FC = ({ children }) => {
    const history = useHistory();
    return (
        <>
            <Header>
                <Title onClick={() => history.push('/')}>
                    BooksLog
                </Title>
                <NavBar>
                    <Link to="/books" activeStyle={{ borderBottomColor: colors.LIGHT_GRAY}}>Books</Link>
                    <Link to="/log" activeStyle={{ borderBottomColor: colors.LIGHT_GRAY}}>Log</Link>
                    <Link to="/analyze" activeStyle={{ borderBottomColor: colors.LIGHT_GRAY}}>Analyze</Link>
                </NavBar>
            </Header>
            <Content>
                {children}
            </Content>
        </>
    );
};

const Header = styled.div`
    top: 0;
    width: 100%;
    height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: ${colors.LIGHT_BLUE};
    box-shadow: 0px -10px 25px 3px rgba(0,0,0,0.6);
`;

const Title = styled.span`
    margin-left: 120px;
    color: ${colors.DARK_GRAY};
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;
`;

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    margin-left: 60px;
    height: 100%;
    align-items: center;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: ${colors.LIGHT_GRAY};
    border-bottom: 5px solid transparent;
    height: 60px;
    padding: 15px 5px 0;
    width: 100px;
    text-align: center;

    &:hover {
        background-color: #00000022;
    }
`;

const Content = styled.div`
    margin-top: 60px;
    margin-left: 120px;
    margin-right: 120px;
    display: flex;
    flex-direction: column;
`;

export default Page;