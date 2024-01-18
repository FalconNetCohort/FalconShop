//Listings.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import db from '../firebase';
import '../firebase'; // adjust the path accordingly

interface CadetItem {
    id: string;
    title: string;
    description: string;
    price: string;
    cadetName: string;
    cadetContact: string;
    imageUrl: string;
}


// Define the type for the props
interface SearchComponentProps {
    data: string[]; // assuming data is an array of strings
}



export default function Listings() {

    const [items, setItems] = useState<CadetItem[]>([]);

    useEffect(() => {
        const cadetItemsRef = ref(db, 'cadetItems');
        const unsubscribe = onValue(cadetItemsRef, snapshot => {
            const fetchedItems: CadetItem[] = [];

            snapshot.forEach(childSnapshot => {
                fetchedItems.push({
                    id: childSnapshot.key as string,
                    ...childSnapshot.val()
                });
            });
            console.log("Fetched items from Firebase:", fetchedItems);
            setItems(fetchedItems);
        });

        // Cleanup
        return () => {
            unsubscribe();
        };
    }, []);
    const data = items.map(item => item.title);
    const [search, setSearch] = useState('');

    return (
        <section>
            <div className="flex flex-col align-middle items-center pb-4">
                <form className="border-4 rounded border-indigo-500">
                    <input className="text-black" type="text" placeholder="Search for a product" name="search" onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>
            <div className="mb-32 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
                {items.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase());
                }).map((item) => (
                    <div key={item.id} className="rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                        <h2 className="mb-3 text-xl font-semibold text-blue-600">{item.title}</h2>
                        <p className="text-sm opacity-70 mb-3">
                            {item.description}
                        </p>
                        <span className="block mt-2 font-bold text-blue-700">${item.price}</span>
                        <p className="mt-3 text-gray-600">Cadet: {item.cadetName}</p>
                        <p className="mt-1 text-gray-600">Contact: {item.cadetContact}</p>
                        <img src={item.imageUrl} alt = "No Image" width ="600" height = "400"/>
                    </div>
                ))}
            </div>
        </section>

    );
}
