import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState<string>();
    const [numberOfPages, setNumberOfPages] = useState<number>();
    return (
        <div>
            <Input 
                label="Title" 
                value={title} 
                onChange={setTitle}
            />
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
        </div>
    );
}

export default AddBookForm;