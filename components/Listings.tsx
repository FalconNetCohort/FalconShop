import React, { useState, useEffect, useCallback } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CadetItem } from "@/services/constants";
import {ListingModal} from "@/components/Modal";
import ReactPaginate from 'react-paginate';

interface ListingsProps {
    selectedCategories: string[];
    searchValue: string;
}
export const insertInSortedList = (list: CadetItem[], newItem: CadetItem): CadetItem[] => {
    const index = list.findIndex(item => new Date(newItem.timeCreated).getTime() < new Date(item.timeCreated).getTime());

    if (index === -1) {
        // If the newItem has the latest timeCreated, append it to the end
        return [...list, newItem];
    }

    // Insert the newItem at the correct index based on timeCreated
    return [...list.slice(0, index), newItem, ...list.slice(index)];
};

export default function Listings({ selectedCategories, searchValue }: ListingsProps) {
    const [allItems, setAllItems] = useState<CadetItem[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedItem, setSelectedItem] = useState<CadetItem | null>(null);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);
    const itemsPerPage = 27;

    const fetchItems = useCallback(() => {
        const db = getDatabase();
        const itemsRef = ref(db, 'cadetItems');

        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                setAllItems([]);
                return;
            }

            let fetchedItems: CadetItem[] = [];
            for (let category in data) {
                if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
                    for (let userId in data[category]) {
                        Object.entries(data[category][userId] as Record<string, CadetItem>).forEach(([key, item]) => {
                            if (!searchValue || item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                fetchedItems.push({ ...item, id: key });
                            }
                        });
                    }
                }
            }

            fetchedItems.sort((a, b) => b.timeCreated - a.timeCreated);
            setAllItems(fetchedItems);
        });
    }, [selectedCategories, searchValue]);

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
        fetchItems();
    }, [fetchItems]);

    useEffect(() => {
        setCurrentPage(0); // Reset page number when categories or search value change
    }, [selectedCategories, searchValue]);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of page
    };

    const handleListingClick = (item: CadetItem) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    // Helper function to determine text size based on title length
    const getTitleSize = (title: string) => {
        const length = title.length;

        if (length <= 15) {
            return 'text-[0.9rem]';  // For shorter titles
        } else if (length <= 30) {
            return 'text-[0.7rem]';  // For medium-length titles
        } else if (length <= 40) {
            return 'text-[0.65rem]';
        } else {
            return 'text-[0.6rem]';
        }
    };

    const offset = currentPage * itemsPerPage;
    const displayedItems = allItems.slice(offset, offset + itemsPerPage);

    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">
                <div
                    className="mb-8 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">
                    {displayedItems.map((item) => (

                        <div key={item.id} className="card relative overflow-hidden bg-cover bg-center"
                             style={{backgroundImage: `url(${item.imageUrl})`}}
                             onClick={() => handleListingClick(item)}>
                            {/* Blurred Background */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

                            <div className="relative z-10 p-4">
                                {currentUserId === item.createdBy && (
                                    <p className="block mt-2 font-bold text-red-700 mb-0 text-[10px] sm:text-lg">Your Listing</p>
                                )}
                                {/* Dynamically adjusting title size based on length */}
                                <h2 className={`mb-3 font-bold text-white w-full overflow-wrap-anywhere break-words ${getTitleSize(item.title)} md:text-lg`}>
                                    {item.title}
                                </h2>
                                {/* Updated Price with brighter color and bold */}
                                <span
                                    className="block mt-2 font-bold text-blue-400 text-xs sm:text-sm md:text-base overflow-wrap-anywhere break-words">
                                    {item.price === '0' ? 'Free' : `$${item.price}`}
                                </span>
                                <span
                                    className={`block mt-2 font-bold text-blue-400 text-[0.65rem] md:text-lg overflow-wrap-anywhere break-words`}>
                                    {new Date(item.timeCreated).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        timeZone: 'UTC'  // Ensures UTC is used
                                    })}
                                </span>
                            </div>
                        </div>


                    ))}
                </div>
                {selectedItem && <ListingModal item={selectedItem} onClose={handleCloseModal}/>}
                <div>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(allItems.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"flex justify-center space-x-2 mt-4 mb-16"}  // Use flexbox and spacing
                        pageClassName={"inline-block px-3 py-1 border rounded"}     // Individual page styling
                        pageLinkClassName={"text-black"}                        // Link color for page numbers
                        activeClassName={"bg-blue-500 text-white"}                 // Active page styling
                        previousClassName={"inline-block px-3 py-1 border rounded"}  // Styling for "Previous" button
                        nextClassName={"inline-block px-3 py-1 border rounded"}      // Styling for "Next" button
                        breakClassName={"inline-block px-3 py-1 border rounded"}     // Styling for the "..." break
                        disabledClassName={"text-gray-400 cursor-not-allowed"}       // Disabled state styling
                        forcePage={currentPage} // Force page number to update when categories or search value change
                    />
                </div>
            </section>
            :
            <div className="flex justify-center h-screen">
                <p className="text-center text-2xl text-blue-500">Please login with AFACADEMY email to view listings</p>
            </div>
    );
}
