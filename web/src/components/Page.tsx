import React from 'react';
import { useHistory } from "react-router-dom";
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
    background-color: ${colors.LIGHT_BLUE};
    box-shadow: 0px -10px 25px 3px rgba(0,0,0,0.6);
`;

const Title = styled.span`
    margin-left: 120px;
    color: ${colors.DARK_GRAY};
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
    cursor: pointer;
`;

const Content = styled.div`
    margin-top: 60px;
    margin-left: 120px;
    margin-right: 120px;
    display: flex;
    flex-direction: column;
`;

export default Page;