import { useState, useEffect } from 'react';
import Image from 'next/image';
import {getDatabase, ref, onValue} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {CadetItem} from "@/services/constants";

interface ListingsProps {
    selectedCategories: string[];
    searchValue: string;
}

export function insertInSortedList(sortedList: CadetItem[], newItem: CadetItem) {
    const index = sortedList.findIndex(item => item.timeCreated < newItem.timeCreated);
    if (index === -1) {
        return [...sortedList, newItem]
    } else {
        return [...sortedList.slice(0, index), newItem, ...sortedList.slice(index)]
    }
}

export default function Listings({ selectedCategories, searchValue }: ListingsProps) {
    const [items, setItems] = useState<CadetItem[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUserId(user.uid);
            } else {
                setCurrentUserId(null);
            }
        });
    }, []);

    useEffect(() => {
        const db = getDatabase();
        const itemsRef = ref(db, 'cadetItems');

        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                setItems([]);
                return;
            }

            let fetchedItems: CadetItem[] = [];
            for (let category in data) {
                if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
                    for (let userId in data[category]) {
                        Object.entries(data[category][userId] as Record<string, CadetItem>).forEach(([key, item]) => {
                            // Include item if searchValue is empty or if the item title includes the searchValue
                            if (!searchValue || item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                fetchedItems.push({ ...item, id: key });
                            }
                        });
                    }
                }
            }

            fetchedItems.sort((a, b) => b.timeCreated - a.timeCreated);

            setItems(fetchedItems);
        });

    }, [selectedCategories, searchValue]);


    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">
                    <div
                        className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                        <div className="card">
                            <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">Example</h2>
                            <span
                                className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">Example</span>
                            <p className="card-body-font mt-3 text-gray-600 overflow-wrap-anywhere break-words">Cadet:
                                Example</p>
                            <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact:
                                Example</p>
                            <p className="card-desc-font opacity-70 mb-3 overflow-wrap-anywhere break-words">Example</p>

                            <Image
                                src={"/assets/images/spark.png"}
                                alt=""
                                width={150}
                                height={150}
                                loader={({src}) => src}
                            />
                        </div>

                        {items.map((item) => (
                            <div key={item.id} className="card">
                                {currentUserId === item.createdBy && (
                                    <p className="block mt-2 font-bold text-red-700 mb-0">Your Listing</p>
                                )}
                                <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">{item.title}</h2>
                                <span
                                    className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">${item.price}</span>
                                <p className="card-body-font mt-3 text-gray-600 overflow-wrap-anywhere break-words">Cadet: {item.cadetName}</p>
                                <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact: {item.cadetContact}</p>
                                <p className="card-desc-font opacity-70 mb-3 overflow-wrap-anywhere break-words">{item.description}</p>
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
            :
            <div className="flex justify-center h-screen">
                <p className="text-center text-2xl text-blue-500">Please login with AFACADEMY email to view listings</p>
            </div>
    );
}