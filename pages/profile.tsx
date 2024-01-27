import React, {useEffect, useState} from 'react';
import RootLayout from '@/components/RootLayout';
import '../firebase';
import ItemUpload from "@/components/ItemUpload";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Image from "next/image";
import {getDocs} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import {db} from "@/firebase";
import {CadetItem} from "@/components/Listings";
import { deleteDoc, doc } from "@firebase/firestore";



export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    let umail = "jdoe@example.com"

    if(user != null && user.email != null){
        umail = user.email
    }

    const [items, setItems] = useState<CadetItem[]>([]);
    const [validImageUrls, setvalidImageUrls] = useState<string[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    const deleteItem = async (documentId: string) => {
        if (!currentUserId) return; // Ensure there is a logged-in user

        try {
            await deleteDoc(doc(db, 'cadetItems', documentId)); // Delete the item
            setItems(items.filter(item => item.id !== documentId)); // Update state
        } catch (error) {
            console.error("Error deleting item: ", error);

        }
    };


    useEffect(() => {
        (async () => {
            setvalidImageUrls(await Promise.all(items.map(async (item) => {
                try {
                    const response = await fetch(item.imageUrl, { method: 'HEAD' });
                    return response.ok ? item.imageUrl : '';
                } catch {
                    return '';
                }
            })))
        })();
    }, [items]);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUserId(user.uid); // Set the current user ID
            }
        });
    }, []);

    useEffect(() => {
        const getItems = async () => {
            const fetchedItems: CadetItem[] = [];
            const querySnapshot = await getDocs(collection(db, 'cadetItems'));
            querySnapshot.forEach((docSnapshot) => {
                fetchedItems.push({
                    ...docSnapshot.data() as CadetItem,
                    id: docSnapshot.id,
                });
            });

            // Filter items by the current user ID
            const userItems = fetchedItems.filter(item => item.createdBy === currentUserId);

            console.log("Filtered items for current user:", userItems);
            setItems(userItems);
        }

        // Fetch items only if there is a logged-in user
        if (currentUserId) {
            getItems().then(r => console.log("Items fetched"));
        }
    }, [currentUserId]);

    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center md:p-24 p-8 bg-gray-100">
                <div className="z-10 items-center justify-between text-lg lg:center">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <div className="flex items-center">
                            <div>
                                <p><strong>Email:</strong> {umail} </p>
                            </div>
                        </div>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl font-bold mb-4">Upload a Product</h2>
                        <ItemUpload/>
                    </section>

                    <section className="pt-12">
                        <h2 className="text-2xl font-bold mb-4">Your Listings</h2>
                        <div className="mb-32 grid mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">

                            {items.map((item) => (
                                <div key={item.id}
                                     className="card">
                                    {currentUserId === item.createdBy && (
                                        <p className="block font-bold text-red-700 mb-0"> Your Listing </p>
                                    )}
                                    <h2 className="card-title-font mb-3 text-xl text-blue-600">{item.title}</h2>

                                    <span className="block mt-2 font-bold text-blue-700">Price: ${item.price}</span>
                                    <p className="card-body-font mt-3">Cadet: {item.cadetName}</p>
                                    <p className="card-body-font my-1">Contact: {item.cadetContact}</p>
                                    <p className="card-desc-font mb-3">
                                        {item.description}
                                    </p>
                                    <Image
                                        src={item.imageUrl}
                                        alt=""
                                        width={600}
                                        height={400}
                                        loader={({src}) => src}
                                    />
                                    <>
                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Delete
                                        </button>
                                    </>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </RootLayout>
    );
}