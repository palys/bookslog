import React from 'react';
import Input from './Input';

const AddBookForm: React.FC = () => {
    return (
        <div>
            <Input label="Title"/>
            <Input label="Authors"/>
            <Input label="Number of pages"/>
        </div>
    );
}

export default AddBookForm;