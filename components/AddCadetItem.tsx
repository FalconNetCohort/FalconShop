'use client';

import React, { useState } from 'react';
import { addCadetItem } from '@/firebase/firebaseUtils';
import { getDownloadURL, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import storage from '../../firebase/firebase';  // Assuming your Firebase initialization exports storage

export default function AddCadetItem() {
    const [item, setItem] = useState({
        title: '',
        description: '',
        price: '',
        cadetName: '',
        cadetContact: '',
        imageUrl: null
    });
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = null;

        if (image) {
            const storageReference = storageRef(storage, 'cadetImages/' + image.name);
            const uploadTask = uploadBytesResumable(storageReference, image);

            await new Promise((resolve, reject) => {
                uploadTask.on('state_changed',

                    (error) => {
                        console.error(error);
                        reject(error);
                    },
                    async () => {
                        imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(imageUrl);
                    }
                );
            });
        }

        addCadetItem({
            ...item,
            imageUrl: imageUrl
        });
    };

    return (
        <div className="flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="px-8 py-4 space-y-4 bg-white shadow-md rounded-md w-3/4"
            >
                <h1 className="text-2xl font-bold text-center">Add Cadet Item</h1>
                <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={e => setItem({ ...item, title: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={e => setItem({ ...item, description: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={item.price}
                    onChange={e => setItem({ ...item, price: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                    type="text"
                    placeholder="Cadet Name"
                    value={item.cadetName}
                    onChange={e => setItem({ ...item, cadetName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                    type="text"
                    placeholder="Cadet Contact"
                    value={item.cadetContact}
                    onChange={e => setItem({ ...item, cadetContact: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="my-2 p-2 border border-gray-300 rounded-md w-full"
                />
                <button
                    type="submit"
                    className="w-full p-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}