import { useState, useEffect } from 'react';
import Image from 'next/image';
import {db} from '@/firebase';

import {getDocs} from "@firebase/firestore";
import {collection, query, orderBy, limit} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Card from "@/components/Card";

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
    const [, setValidImageUrls] = useState<string[]>([]);
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
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'cadetItems'),
                    orderBy('createdBy'),
                    limit(50)
                )
            );

            querySnapshot.forEach((doc) => {
                fetchedItems.push({
                    ...doc.data() as CadetItem,
                    id: doc.id,
                });
            });

            const filteredItems = fetchedItems.filter((item: CadetItem) =>
                (!selectedCategories || selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
                (searchValue === '' || item.title.toLowerCase().includes(searchValue.toLowerCase()))
            );

            // Sort items to have the current user's items at the top
            filteredItems.sort((a, b) => (a.createdBy === currentUserId ? -1 : b.createdBy === currentUserId ? 1 : 0));

            console.log("Filtered items based on categories and search:", filteredItems);
            setItems(filteredItems);
        }

        getItems();
    }, [selectedCategories, searchValue, currentUserId]);

    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">
                <div
                    className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                    {items.map((item) => (
                        <Card key={item.id} item={item} currentUserId={currentUserId}/>
                    ))}
                </div>
            </section>
        :
                <div className="flex justify-center h-screen">
                    <p className="text-center text-2xl text-blue-500">Please login with AFACADEMY email to view listings</p>
                </div>
    );
}