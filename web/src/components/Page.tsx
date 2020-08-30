import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
}

const Page: React.FC<Props> = ({ title, children }) => (
    <>
        <Header>
            <h1>
                {title}
            </h1>
        </Header>
        <Content>
            {children}
        </Content>
    </>
);

const Header = styled.div`
    top: 0;
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: blue;
`;

const Content = styled.div`
    margin-top: 60px;
`;

export default Page;