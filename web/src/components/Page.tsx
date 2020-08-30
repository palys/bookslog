import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

interface Props {
    title: string;
}

const Page: React.FC<Props> = ({ title, children }) => (
    <>
        <Header>
            <Title>
                {title}
            </Title>
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
    background-color: ${colors.LIGHT_BLUE};
`;

const Title = styled.span`
    margin-left: 120px;
    color: ${colors.DARK_GRAY};
    font-size: 40px;
    line-height: 60px;
    font-weight: 700;
`;

const Content = styled.div`
    margin-top: 60px;
    margin-left: 120px;
    margin-right: 120px;
`;

export default Page;