'use client';

import React, { useState } from 'react';
import { addCadetItem } from './firebaseUtils';

export default function AddItemComponentClient() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [cadetName, setCadetName] = useState('');
    const [cadetContact, setCadetContact] = useState('');

    const handleSubmit = () => {
        const newItem = {
            title,
            description,
            price,
            cadetName,
            cadetContact
        };

        addCadetItem(newItem);
    };

    return (
        <div>
            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input
                placeholder="Price"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <input
                placeholder="Cadet Name"
                value={cadetName}
                onChange={e => setCadetName(e.target.value)}
            />
            <input
                placeholder="Cadet Contact"
                value={cadetContact}
                onChange={e => setCadetContact(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Item</button>
        </div>
    );
}
