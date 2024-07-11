"use client";
import { addCategory } from '@/utils/api.method';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';

const AddNew: React.FC = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setImage(file);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        let formData = new FormData();
        formData.append('title', title);
        if (image) {
            formData.append('image', image, image.name);
        }
        try {
            await addCategory(formData);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className="bg-gray-200 p-4 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title:</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} className="border border-gray-400 p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700">Image:</label>
                    <input type="file" id="image" accept="image/*" onChange={handleFileChange} className="border border-gray-400 p-2" />
                </div>
                {image && (
                    <div className="mb-4">
                        <Image src={URL.createObjectURL(image)} alt="Selected Image" className="max-w-full h-auto" height={140} width={140} />
                    </div>
                )}
                <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">{isLoading? 'Submitting': 'Submit'}</button>
            </form>
        </div>
    );
};

export default AddNew;
