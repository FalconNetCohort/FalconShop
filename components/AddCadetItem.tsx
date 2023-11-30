import React, { useEffect, useState } from 'react';
import { addCadetItem } from '@/firebaseUtils';
import { getDownloadURL, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { storage } from '@/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AddCadetItem() {
    const [item, setItem] = useState({
        title: '',
        description: '',
        price: '',
        cadetName: '',
        cadetContact: '',
        imageUrl: null,
        quantity: '',
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
                    addCadetItem({
                        ...item,
                        imageUrl: imageUrl

                    });
                    setUploadStatus('Upload successful!');
                }
            );
        } else {
            addCadetItem({
                ...item,
                imageUrl: "gs://falconshop-303c4.appspot.com/cadetImages/Screenshot 2023-11-13 144137.png"
        });
        }
    };

    return (
        <div className="flex items-center justify-center text-black">
            <form
                onSubmit={handleSubmit}
                className="px-8 py-4 space-y-4 bg-white shadow-md rounded-md w-3/4"
            >
                <h1 className="text-2xl font-bold text-center">Add Cadet Item</h1>

                {/* Form Inputs for title, description, price, etc. with 'required' attribute added */}
                <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={e => setItem({ ...item, title: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={e => setItem({ ...item, description: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={item.price}
                    onChange={e => setItem({ ...item, price: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Cadet Name"
                    value={item.cadetName}
                    onChange={e => setItem({ ...item, cadetName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Cadet Contact"
                    value={item.cadetContact}
                    onChange={e => setItem({ ...item, cadetContact: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={e => setItem({ ...item, quantity: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"

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
