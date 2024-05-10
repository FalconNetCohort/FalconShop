import React, {useEffect, useState} from 'react';
import RootLayout from '@/components/RootLayout';
import '../firebase';
import ItemUpload from "@/components/ItemUpload";
import ItemUpdate from "@/components/ItemUpdate";
import {getAuth, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";
import Image from "next/image";
import {insertInSortedList} from "@/components/Listings";
import {CadetItem} from "@/services/constants";
import Button from "@mui/material/Button";
import {getDatabase, onValue, ref, remove} from "firebase/database";


export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [items, setItems] = useState<CadetItem[]>([]);
    const [, setValidImageURLs] = useState<string[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const [isUploadVisible, setIsUploadVisible] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState<Record<string, boolean>>({});
    const [itemToEdit, setItemToEdit] = useState<CadetItem | null>(null);

    let userEmail = "jdoe@example.com"

    if(user != null && user.email != null){
        userEmail = user.email
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUserId(user.uid); // Set the current user ID
            }
        });
    }, []);

    const handleResetPassword = () => {
        if(user != null && user.email != null){
            sendPasswordResetEmail(auth, user.email)
                .then(() => {
                    // Prompt user to check email
                    console.log('Password reset email sent to', user.email); // Password reset email sent!
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('Error code:', errorCode);
                    console.log('Error Message:', errorMessage);
                });
        }
    };

    const fetchItems = async () => {
        if (currentUserId) {
            console.log(`Fetching items for user: ${currentUserId}`);
            const db = getDatabase();
            const itemsRef = ref(db, 'cadetItems');
            let fetchedItems: CadetItem[] = [];

            onValue(itemsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    for (let category in data) {
                        for (let userId in data[category]) {
                            if (userId !== currentUserId) continue;
                            Object.values(data[category][userId] as Record<string, CadetItem>).forEach((item: CadetItem) => {
                                const newItem: CadetItem ={
                                    ...item,
                                    id: item.id,
                                };
                                fetchedItems = insertInSortedList(fetchedItems, newItem);
                            });
                        }
                    }
                }

                console.log(`Fetched items: ${JSON.stringify(fetchedItems)}`);
                setItems(fetchedItems);

            }, (error) => {
                console.error(`An error occurred: ${error}`);
            });
        }
    };

    useEffect(() => {
        fetchItems();
    }, [currentUserId]);

    const toggleUploadVisibility = () => {
        setIsUploadVisible(prevIsUploadVisible => !prevIsUploadVisible);
    };
    const deleteItem = async (item: CadetItem) => {
        if (!currentUserId) return;

        const { id: itemId, category } = item; // Destructure to get the itemId and the category from the item

        try {
            const db = getDatabase();
            const itemRef = ref(db, `cadetItems/${category}/${currentUserId}/${itemId}`);
            console.log(`Deleting item at path: cadetItems/${category}/${currentUserId}/${itemId}`);

            await remove(itemRef);
            console.log("Item deleted successfully");
            setItems(prevItems => prevItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error("Error deleting item: ", error);
        }
    };

    const editItem = async (item: CadetItem) => {
        setItemToEdit(item);
        toggleUploadVisibility();
    }

    useEffect(() => {
        (async () => {
            setValidImageURLs(await Promise.all(items.map(async (item) => {
                try {
                    const response = await fetch(item.imageUrl, { method: 'HEAD' });
                    return response.ok ? item.imageUrl : '';
                } catch {
                    return '';
                }
            })))
        })();
    }, [items]);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col md:p-24 p-8 bg-gray-100">
                <div className="z-10 items-center justify-between text-lg lg:center">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <div className="flex items-center">
                            <div>
                                <p><strong>Email:</strong> {userEmail} </p>
                            </div>
                        </div>

                        <div className="mx-auto flex">
                            <Button
                                className={"text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded"}
                                variant="contained"
                                onClick={handleResetPassword}
                            >
                                Reset Password
                            </Button>

                            <span className="px-2"/>

                        </div>

                    </section>

                    <section className="pt-12">
                        <h2 className="text-2xl font-bold mb-4">Your Listings</h2>

                        <button
                            onClick={toggleUploadVisibility}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Make a Post!
                        </button>

                        <section className="w-full mb-6 mt-3">
                            {isUploadVisible && (
                                itemToEdit
                                    ? <ItemUpdate handleRefresh={handleRefresh} item={itemToEdit} onUpdated={() => {
                                        setItemToEdit(null);
                                        toggleUploadVisibility();
                                    }}/>
                                    : <ItemUpload/>
                            )}
                        </section>

                        <div
                            className="mb-32 grid mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">

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
                                    <span className="flex justify-between">
                                        <button
                                            onClick={() => {
                                                if (confirmDelete[item.id]) {
                                                    deleteItem(item); // delete as normal
                                                    setConfirmDelete({...confirmDelete, [item.id]: false}); // reset delete confirmation state
                                                } else {
                                                    setConfirmDelete({...confirmDelete, [item.id]: true}); // initiate delete confirmation
                                                    if (isUploadVisible) {
                                                        toggleUploadVisibility();
                                                        setItemToEdit(null);
                                                        console.log("Toggled visibility and cleared edit form appropriately.");
                                                    }
                                                }
                                            }}
                                            className="mt-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            {confirmDelete[item.id] ? <span className="text-sm">Are you sure?</span> : "Delete"}
                                        </button>
                                        <button
                                            onClick={() => editItem(item)}
                                            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Edit
                                        </button>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </RootLayout>
    );
}