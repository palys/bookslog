import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Input from './Input';
import Select from './Select';

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState<string>();
    const [numberOfPages, setNumberOfPages] = useState<number>();
    const [numberOfAuthors, setNumberOfAuthors] = useState(1);
    return (
        <div>
            <Container>
                <Input
                    label="Title"
                    value={title}
                    onChange={setTitle}
                />
            </Container>
            <Container>
                <label>Authors</label>
                {[...Array(numberOfAuthors)].map((_, i) => (
                    <AuthorContainer>
                        <Select
                            key={i}
                            options={[{
                                id: '1',
                                value: 'author1'
                            }, {
                                id: '2',
                                value: 'author2'
                            }]}
                            value={{
                                id: '2',
                                value: 'author2'
                            }} />
                    </AuthorContainer>))}
                <button onClick={() => setNumberOfAuthors(i => i + 1)}>More</button>
            </Container>
            <Container>
                <Input
                    label="Number of pages"
                    type="number"
                    value={`${numberOfPages}`}
                    onChange={pages => {
                        try {
                            setNumberOfPages(parseInt(pages));
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                />
            </Container>
        </div>
    );
}

const Container = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid ${colors.LIGHT_GRAY};
    border-radius: 3px;
`;

const AuthorContainer = styled.div`
    margin-bottom: 10px;    
`;

export default AddBookForm;