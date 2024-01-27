import { useState, useEffect } from 'react';
import Image from 'next/image';
import {db} from '@/firebase';

import {SearchBar} from "./Search";
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
    const [validImageUrls, setvalidImageUrls] = useState<string[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

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
                });
            });

            const filteredItems = fetchedItems.filter((item: CadetItem) =>
                (!selectedCategories || selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
                (searchValue === '' || item.title.toLowerCase().includes(searchValue.toLowerCase()))
            );

            console.log("Filtered items based on categories and search:", filteredItems);
            setItems(filteredItems);
        }

        getItems();
    }, [selectedCategories, searchValue]);


    return (
        <section>
            <div className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                {items.map((item) => (
                        <div key={item.id}
                             className="rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                            {currentUserId === item.createdBy && (
                            <p className ="block mt-2 font-bold text-red-700 mb-0">  Your Listing </p>
                            )}
                            <h2 className="card-title-font mb-3 text-xl text-blue-600">{item.title}</h2>
                            <p className="card-body-font opacity-70 mb-3">
                                {item.description}
                            </p>
                            <span className="block mt-2 font-bold text-blue-700">${item.price}</span>
                            <p className="mt-3 text-gray-600">Cadet: {item.cadetName}</p>
                            <p className="mt-1 text-gray-600">Contact: {item.cadetContact}</p>
                            <Image
                                src={item.imageUrl}
                                alt=""
                                width={600}
                                height={400}
                                loader={({src}) => src}
                            />
                        </div>
                    ))}

            </div>
            
        </section>
    );
}