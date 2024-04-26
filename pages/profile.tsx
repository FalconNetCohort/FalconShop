import React, {useEffect, useState} from 'react';
import RootLayout from '@/components/RootLayout';
import '../firebase';
import ItemUpload from "@/components/ItemUpload";
import {getAuth, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";
import Image from "next/image";
import {CadetItem, insertInSortedList} from "@/components/Listings";
import Button from "@mui/material/Button";
import {getDatabase, onValue, ref, remove} from "firebase/database";



export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    let userEmail = "jdoe@example.com"

    if(user != null && user.email != null){
        userEmail = user.email
    }

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

    const [items, setItems] = useState<CadetItem[]>([]);
    const [, setValidImageURLs] = useState<string[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState(false);

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
        // TODO: Implement edit item functionality

        const { id: itemId, category } = item; // Destructure to get the itemId and the category from the item

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

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUserId(user.uid); // Set the current user ID
            }
        });
    }, []);

    useEffect(() => {
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

        fetchItems();
    }, [currentUserId]);

    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center md:p-24 p-8 bg-gray-100">
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

                            <Button
                                className={"text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded"}
                                variant="contained"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => window.open("https://forms.office.com/r/3FJZaMMXZt", "_blank")}
                            >
                                {isHovered ? 'Let Us Know!' : 'Feedback?'}
                                {/*Add time transition */}
                            </Button>
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
                                            onClick={() => deleteItem(item)}
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