
import React, { useState, useRef, useEffect } from 'react';
import SimpleMDE from 'simplemde';
import 'simplemde.min.css';
import Select from 'react-select';

const categories = [
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'logic', label: 'Logic' },
    { value: 'economics', label: 'Economics' },

    // ... other categories
];

const ageRanges = [
    { value: '5-6', label: '5-6' },
    { value: '7-9', label: '7-9' },
    { value: '10-14', label: '10-14' },
    { value: '14+', label: '14+' },
    // ... other age ranges
];

const ContentForm = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [content, setContent] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        const simplemde = new SimpleMDE({ element: textareaRef.current });
    }, []);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setUrl(event.target.value.replace(/\s+/g, '-').toLowerCase()); // Update URL based on title
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 1. Handle image upload (Cloudflare Images)
        // 2. Construct final data 
        // 3. Send data to your backend or Cloudflare worker
        console.log('Form submitted:', title, category, ageRange, image, url, content);

        // Reset form (replace with your actual state reset logic)
        setTitle('');
        setCategory('');
        // ... reset other fields
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Moment Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} required />
            </div>

            {/* Category Selector */}
            {/* Age Range Selector */}

            <div>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
            </div>

            <div>
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" value={url} readOnly />
            </div>

            <div>
                <label htmlFor="content">Content:</label>
                <textarea ref={textareaRef} value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default contentForm;
