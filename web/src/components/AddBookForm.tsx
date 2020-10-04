import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Input from './Input';
import Select from './Select';

const authorsOptions = [{
    id: '1',
    name: 'author1'
}, {
    id: '2',
    name: 'author2'
}, {
    id: '3',
    name: 'author3'
}, {
    id: '4',
    name: 'author4'
}]

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState<string>();
    const [numberOfPages, setNumberOfPages] = useState<number>();
    const [numberOfAuthors, setNumberOfAuthors] = useState(1);
    const [authors, setAuthors] = useState<string[]>([]);

    const options = authorsOptions.map(({id, name}) => ({id, value: name}));

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
                    <AuthorContainer key={i}>
                        <Select 
                            options={options} 
                            onChange={(id) => setAuthors(state => {
                                const newState = [...state];
                                newState[i] = id;
                                return newState;
                            })}
                            valueId={authors[i] ?? -1}
                        />
                    </AuthorContainer>))}
                <button 
                    onClick={() => setNumberOfAuthors(i => Math.min(i + 1, authorsOptions.length))}
                    disabled={numberOfAuthors === authorsOptions.length}
                >
                        More
                </button>
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