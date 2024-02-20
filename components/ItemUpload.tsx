import React, { useEffect, useState } from 'react';
import { addCadetItem } from '@/firebaseUtils';
import { getDownloadURL, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { storage } from '@/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "next/router.js";

export default function ItemUpload() {
    const [item, setItem] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        cadetName: '',
        cadetContact: '',
        imageUrl: '',
        quantity:   '',
        createdBy: ''
    });
    const [image, setImage] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<any>(null); // Store current user

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user) {
                // If user is logged in, set the createdBy field
                setItem((prevItem) => ({ ...prevItem, createdBy: user.uid }));
            }
        });
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            setUploadStatus('File selected.');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if the price is a positive number
        if (!/^\d*\.?\d+$/.test(item.price) || parseFloat(item.price) <= 0) {
            setUploadStatus('Please enter a valid positive number for the price.');
            return;
        }

        // Check if the quantity is a positive number
        if (!/^\d+$/.test(item.quantity) || parseInt(item.quantity, 10) <= 0) {
            setUploadStatus('Please enter a valid positive integer for the quantity.');
            return;
        }

        // Check if a category is selected
        if (!item.category) {
            setUploadStatus('Please select a category.');
            return;
        }

        setUploadStatus('Uploading...');

        let imageUrl = null;

        if (image) {
            const storageReference = storageRef(storage, 'cadetImages/' + image.name);
            const uploadTask = uploadBytesResumable(storageReference, image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadStatus(`Upload is ${progress}% done`);
                },
                (error) => {
                    console.error(error);
                    setUploadStatus('An error occurred while uploading.');
                },
                async () => {
                    imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    await addCadetItem({
                        ...item,
                        imageUrl: imageUrl,
                        createdBy: currentUser.uid
                    });
                    setUploadStatus('Upload successful!');
                }

            );
            await router.push('/'); // Direct the user to the home page.

        } else {
            // if no image has been uploaded, use a default image
            imageUrl = 'https://firebasestorage.googleapis.com/v0/b/falconshop-303c4.appspot.com/o/FalconShop_noImage.png?alt=media&token=a9d51293-08c9-4dd3-8d60-aad660f99323';

            await addCadetItem({
                ...item,
                imageUrl: imageUrl, // Set the imageUrl to your default imageUrl
                createdBy: currentUser.uid // Set the 'createdBy' field to currentUser.uid
            });
            await router.push('/'); // Direct the user to the home page.


        }
    };

    return (
        <div className="flex justify-center max-w-screen md:px-16">
            <form
                onSubmit={handleSubmit}
                className="px-4 py-4 space-y-4 bg-white shadow-md rounded-md w-full"
            >
                <h1 className="text-2xl font-bold text-center">Add Cadet Item</h1>

                {/* Form Inputs for title, description, price, etc. with 'required' attribute added */}
                <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={e => setItem({...item, title: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    maxLength={50} // max length of 50 characters
                    required
                />
                <textarea
                    placeholder="Description"
                    value={item.description}
                    onChange={e => setItem({...item, description: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    maxLength={200} // max length of 200 characters
                />
                <select
                    id="category"
                    value={item.category}
                    onChange={(e) => setItem({...item, category: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                >
                    <option value="">Select a category</option>
                    <option value="Books/Study">Books/Study</option>
                    <option value="Clothing/Shoes">Clothing/Shoes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Uniform">Uniform</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="number"
                    placeholder="Price"
                    value={item.price}
                    onChange={e => setItem({...item, price: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Cadet Name"
                    value={item.cadetName}
                    onChange={e => setItem({...item, cadetName: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Cadet Contact"
                    value={item.cadetContact}
                    onChange={e => setItem({...item, cadetContact: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={e => setItem({...item, quantity: e.target.value})}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="my-2 p-2 border border-gray-300 rounded-md w-full"
                />
                {uploadStatus && <p className="p-2 border border-gray-300 rounded-md w-full">{uploadStatus}</p>}

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
