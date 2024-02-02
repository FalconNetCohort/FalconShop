import { useState, useEffect } from 'react';
import Image from 'next/image';
import {db} from '@/firebase';

import {SearchBar} from "./Search";
import {getDocs} from "@firebase/firestore";
import {collection} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button } from "@mui/material";
import {any} from "prop-types";

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

type InterestedButtonProps = {
    item: CadetItem,
};

export default function Listings({ selectedCategories, searchValue }: ListingsProps) {
    const [items, setItems] = useState<CadetItem[]>([]);
    const [validImageUrls, setValidImageUrls] = useState<string[]>([]);
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

            // Sort items to have the current user's items at the top
            filteredItems.sort((a, b) => (a.createdBy === currentUserId ? -1 : b.createdBy === currentUserId ? 1 : 0));

            console.log("Filtered items based on categories and search:", filteredItems);
            setItems(filteredItems);
        }

        getItems();
    }, [selectedCategories, searchValue, currentUserId]);

    // Add state to keep count of interested items
    const [interestedInItems, setInterestedInItems] = useState<string[]>([]);
    const notifySeller = (item: CadetItem) => {
        // The actual notification function
        // It could make a request to a backend API or directly update a database
        console.log(`Buyer is interested in item ID: ${item.id}`);
        // Add the interested item id to the array
        setInterestedInItems(oldArray => [...oldArray, item.id]);
    };

    const InterestedButton: React.FC<InterestedButtonProps> = ({ item }) => {
        const [hover, setHover] = useState(false);
        return (
            <Button
                className={`text-white ${interestedInItems.includes(item.id) ? 'bg-gray-500' : hover ? 'bg-blue-600' : 'bg-blue-500'} align-middle w-full`}
                variant="contained"
                onClick={() => {
                    notifySeller(item);
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                disabled={interestedInItems.includes(item.id) || interestedInItems.length >= 5}
            >
                {hover ? 'Interested!' : 'Interested!'}
            </Button>
        )
    }

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

                {items.map((item) => (
                    <div key={item.id}
                         className="card">
                        {currentUserId === item.createdBy && (
                            <p className="block mt-2 font-bold text-red-700 mb-0">Your Listing</p>
                        )}
                        <h2 className="card-title-font mb-3 text-xl text-blue-600 w-full">{item.title}</h2>
                        {currentUserId !== item.createdBy && (
                            <InterestedButton item={item} />
                        )}

                        <span className="block mt-2 font-bold text-blue-700">${item.price}</span>
                        <p className="card-body-font mt-3 text-gray-600">Cadet: {item.cadetName}</p>
                        <p className="card-body-font mt-1 text-gray-600">Contact: {item.cadetContact}</p>
                        <p className="card-desc-font opacity-70 mb-3">
                            {item.description}
                        </p>
                        <Image
                            src={item.imageUrl}
                            alt=""
                            width={150}
                            height={150}
                            loader={({src}) => src}
                        />
                    </div>
                ))}

            </div>
        </section>
    );
}