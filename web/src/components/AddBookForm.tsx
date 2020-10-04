import React from 'react';
import Input from './Input';
import Select from './Select';

const AddBookForm: React.FC = () => {
    return (
        <div>
            <Input label="Title" />
            <Select 
                label="Authors"
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
            <Input label="Number of pages" />
        </div>
    );
}

export default AddBookForm;