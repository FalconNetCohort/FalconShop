import React, { useEffect, useState } from 'react';
import { app } from '@/firebase';
import { getDatabase, ref, set } from 'firebase/database';

interface ItemUploadProps {
    handleRefresh: () => void;
    item: any;
    onUpdated: () => void;
}

export default function ItemUpdate({ handleRefresh, item, onUpdated }: ItemUploadProps) {
    const [editedItem, setEditedItem] = useState(item);
    const [image, setImage] = useState(null);


    const updateItem = () => {
        // ! The actual code for uploading or updating a item may be more complex
        // After finish updating the item call handleRefresh function
        // to refresh the main Profile page
        handleRefresh();
    }

    useEffect(() => {
        setEditedItem(item);
    }, [item]);

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Get a reference to the database
            const db = getDatabase(app);
            const itemRef = ref(db, `cadetItems/${editedItem.category}/${editedItem.createdBy}/${editedItem.id}`);
            // Set the data of the new item using the item object
            await set(itemRef, editedItem);

            if (item.category !== editedItem.category) {
                const oldItemRef = ref(db, `cadetItems/${item.category}/${item.createdBy}/${item.id}`);
                await set(oldItemRef, null);
            }
            // Callback to parent component
            onUpdated();
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="px-4 py-4 space-y-4 bg-white shadow-md rounded-md w-full"
        >
        <h1 className="text-xl font-semibold">Edit Item</h1>
            <label className="block">
                <span className="text-gray-700">Title</span>
                <input
                    type="text"
                    value={editedItem.title}
                    onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                    value={editedItem.description}
                    onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Price</span>
                <input
                    type="text"
                    value={editedItem.price}
                    onChange={(e) => setEditedItem({ ...editedItem, price: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Contact</span>
                <input
                    type="text"
                    value={editedItem.cadetContact}
                    onChange={(e) => setEditedItem({ ...editedItem, cadetContact: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>

            <label className="block">
                <span className="text-gray-700">Category</span>
                <select
                    value={editedItem.category}
                    onChange={(e) => setEditedItem({...editedItem, category: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="Study">Study</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Uniform">Uniform</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <label className="block">
                <span className="text-gray-700">Quantity</span>
                <input
                    type="number"
                    value={editedItem.quantity}
                    onChange={(e) => setEditedItem({...editedItem, quantity: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Upload Image</span>
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {/* Remember to add a message holder to show file upload status */}
            </label>


            <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                onClick={updateItem}
            >
                Update
            </button>

        </form>
    );
}