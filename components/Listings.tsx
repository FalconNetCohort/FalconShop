import { useState, useEffect } from 'react';
import Image from 'next/image';
import {getDatabase, ref, onValue, query, orderByChild, orderByKey} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import InfiniteScroll from 'react-infinite-scroll-component';

export interface CadetItem {
    createdBy: any;
    timeCreated: any;
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

// const buildQuery = (selectedCategories: string[]): QueryConstraint[] => {
//     let constraints: QueryConstraint[] = [orderBy('createdBy')];
//
//     constraints.push();
//
//     return constraints;
// };

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
        let dbQuery = query(itemsRef, selectedCategories.length > 0 ? orderByChild('category') : orderByKey());

        const fetchData = async () => {
            onValue(dbQuery, (snapshot) => {
                const data = snapshot.val();
                let fetchedItems = [];

                for(let id in data) {
                    fetchedItems.push({
                        ...data[id],
                        id: id
                    });
                }

                const filteredItems = fetchedItems.filter((item) =>
                    selectedCategories.includes(item.category) &&
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                );

                setItems(filteredItems);
            });
        };

        fetchData();
    }, [selectedCategories, searchValue]);

    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">

                <InfiniteScroll
                    dataLength={items.length} //This is important field to render the next data
                    next={() => {setItems}}
                    hasMore={true}
                    loader={<h4 style={{textAlign: 'center'}} className="text-sm text-gray-500">You've reached the end</h4>}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    className="p-8"
                >
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
                </InfiniteScroll>
            </section>
            :
            <div className="flex justify-center h-screen">
                <p className="text-center text-2xl text-blue-500">Please login with AFACADEMY email to view listings</p>
            </div>
    );
}