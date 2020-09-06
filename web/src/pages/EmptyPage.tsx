import React from 'react';
import styled from 'styled-components';

import { Page } from '../components';
import colors from '../theme/colors';

const EmptyPage: React.FC = () => (
    <Page>
        <Content>
            Work in progress
        </Content>
    </Page>
);

const Content = styled.div`
    font-size: 30px;
    color: ${colors.DARK_GRAY};
`;

export default EmptyPage;