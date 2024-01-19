'use client';

import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import db from '../firebase';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface CadetItem {
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
}

export default function Listings({ selectedCategories }: ListingsProps) {
    const [items, setItems] = useState<CadetItem[]>([]);

    useEffect(() => {
        const cadetItemsRef = ref(db, 'cadetItems');
        const unsubscribe = onValue(cadetItemsRef, (snapshot) => {
            const fetchedItems: CadetItem[] = [];
            snapshot.forEach((childSnapshot) => {
                fetchedItems.push({
                    id: childSnapshot.key as string,
                    ...childSnapshot.val(),
                });
            });

            const filteredItems = fetchedItems.filter((item: CadetItem) =>
                !selectedCategories || selectedCategories.length === 0
                    ? true
                    : selectedCategories.includes(item.category)
            );

            console.log("Filtered items based on categories:", filteredItems);
            setItems(filteredItems);
        });

        return () => {
            unsubscribe();
        };
    }, [selectedCategories]);

    const [search, setSearch] = useState('');

    return (
        <section>
            <div className="flex flex-col p-2">
                <TextField placeholder="Search for a product" name="search"
                           onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="mb-32 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
                {items.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase());
                }).map((item) => (
                    <div key={item.id}
                         className="rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                        <h2 className="mb-3 text-xl font-semibold text-blue-600">{item.title}</h2>
                        <p className="text-sm opacity-70 mb-3">
                            {item.description}
                        </p>
                        <span className="block mt-2 font-bold text-blue-700">${item.price}</span>
                        <p className="mt-3 text-gray-600">Cadet: {item.cadetName}</p>
                        <p className="mt-1 text-gray-600">Contact: {item.cadetContact}</p>
                        <img src={item.imageUrl} alt={item.title} width="600" height="400"/>
                    </div>
                ))}
            </div>
        </section>
    );
}
