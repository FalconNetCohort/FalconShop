import { useState, useEffect } from 'react';
import Image from 'next/image';
import {db} from '@/firebase';

import {SearchBar} from "./Search";
import {getDocs} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from '@mui/material';

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
                    id: docSnapshot.id,
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

    const notifySeller = (item: CadetItem) => {
        // The actual notification function
        // It could make a request to a backend API or directly update a database
        console.log(`Buyer is interested in item ID: ${item.id}`);
    };


    return (
        <section>
            <div className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">

                {items.map((item) => (
                    <div key={item.id}
                         className="card">
                        {currentUserId === item.createdBy && (
                            <p className="block font-bold text-red-700 mb-0"> Your Listing </p>
                        )}
                        <h2 className="card-title-font mb-3 text-xl text-blue-600">{item.title}</h2>
                        {currentUserId !== item.createdBy && (
                            <Button
                                variant="contained"
                                onClick={() => notifySeller(item)}>
                                I&apos;m Interested
                            </Button>
                        )}

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
                    </div>
                ))}

            </div>

        </section>
    );
}