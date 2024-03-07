import { useState, useEffect } from 'react';
import Image from 'next/image';
import {db} from '@/firebase';

import {getDocs} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface CadetItem {
    createdBy: any;
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    cadetName: string;
    cadetContact: string;
    imageUrl: string;
}

interface ListingsProps {
    selectedCategories: string[];
    searchValue: string;
}



export default function Listings({ selectedCategories, searchValue }: ListingsProps) {
    const [items, setItems] = useState<CadetItem[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    useEffect(() => {
        const getItems = async () => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setCurrentUserId(user.uid);
                } else {
                    setCurrentUserId(null);
                }
            });

            const fetchedItems: CadetItem[] = [];
            const querySnapshot = await getDocs(collection(db, 'cadetItems'));
            querySnapshot.forEach((docSnapshot) => {
                fetchedItems.push({
                    ...docSnapshot.data() as CadetItem,
                    id: docSnapshot.id,
                });
            });

            const filteredItems = fetchedItems.filter((item: CadetItem) =>
                (!selectedCategories || selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
                (searchValue === '' || item.title.toLowerCase().includes(searchValue.toLowerCase()))
            );

            filteredItems.sort((a, b) => (a.createdBy === currentUserId ? -1 : b.createdBy === currentUserId ? 1 : 0));

            setItems(filteredItems);
        }

        getItems();
    }, [selectedCategories, searchValue, currentUserId]);

    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">
                <div className="mb-32 grid mx-auto gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9">
                    {items.map((item) => (
                        <div key={item.id} className="card text-sm">
                            {currentUserId === item.createdBy && (
                                <p className="block mt-1 font-bold text-red-700 mb-0 text-xs">Your Listing</p>
                            )}
                            <h2 className="card-title-font mb-2 text-lg w-full overflow-wrap-anywhere break-words">{item.title}</h2>
                            <span className="block mt-1 font-bold text-blue-700 overflow-wrap-anywhere break-words">${item.price}</span>
                            <p className="card-body-font mt-2 text-gray-600 overflow-wrap-anywhere break-words">Cadet: {item.cadetName}</p>
                            <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact: {item.cadetContact}</p>
                            <p className="card-desc-font opacity-70 mb-2 overflow-wrap-anywhere break-words">{item.description}</p>
                            <Image
                                src={item.imageUrl}
                                alt=""
                                width={60} // Slightly reduced from previous size
                                height={60} // Slightly reduced from previous size
                                loader={({src}) => src}
                            />
                        </div>
                    ))}
                </div>
            </section>
            :
            <div className="flex justify-center h-screen">
                <p className="text-center text-lg text-blue-500">Please login with AFACADEMY email to view listings</p>
            </div>
    );
}