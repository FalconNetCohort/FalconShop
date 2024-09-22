import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CadetItem } from "@/services/constants";
import { Modal, Box, Typography, Button } from '@mui/material';
import ReactPaginate from 'react-paginate';

interface ListingsProps {
    selectedCategories: string[];
    searchValue: string;
}

interface ListingModalProps {
    item: CadetItem | null;
    onClose: () => void;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ListingModal: React.FC<ListingModalProps> = ({ item, onClose }) => {
    return (
        <Modal open={!!item} onClose={onClose}>
            <Box sx={modalStyle}>
                <Button style={{ float: 'right' }} onClick={onClose}>X</Button>
                {item && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={150}
                            height={150}
                            loader={({ src }) => src}
                            className="object-cover rounded"
                        />
                        <Box sx={{ ml: 3 }}>
                            <Typography variant="h6" component="h2">{item.title}</Typography>
                            <Typography sx={{ mt: 2 }}>{item.price === '0' ? 'Free' : `$${item.price}`}</Typography>
                            <Typography sx={{ mt: 2 }}>Cadet: {item.cadetName}</Typography>
                            <Typography sx={{ mt: 2 }}>Contact: {item.cadetContact}</Typography>
                            <Typography sx={{ mt: 2 }}>{item.description}</Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Modal>
    );
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

    const offset = currentPage * itemsPerPage;
    const displayedItems = allItems.slice(offset, offset + itemsPerPage);

    return (
        currentUserId ?
            <section className="flex flex-col items-center justify-center">
                <div className="mb-8 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">
                    {displayedItems.map((item) => (
                        <div key={item.id} className="card relative" onClick={() => handleListingClick(item)}>
                            {currentUserId === item.createdBy && (
                                <p className="block mt-2 font-bold text-red-700 mb-0">Your Listing</p>
                            )}
                            <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">{item.title}</h2>
                            <span className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">
                                {item.price === '0' ? 'Free' : `$${item.price}`}
                            </span>
                            <div className="absolute bottom-0 right-0 m-2">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    loader={({ src }) => src}
                                    className="object-cover rounded-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {selectedItem && <ListingModal item={selectedItem} onClose={handleCloseModal} />}
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
                        pageLinkClassName={"text-blue-500"}                        // Link color for page numbers
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
