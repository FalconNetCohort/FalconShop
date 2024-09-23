import React, {useState} from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import '../firebase';
import CategorySelection from '../components/CategorySelection';
import {SearchBar} from "@/components/Search";

export default function Index() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [search, setSearch] = useState('');
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col pt-4 bg-neutral-100 px-8">
            <div>
                <CategorySelection selectedCategories={selectedCategories}
                                   setSelectedCategories={setSelectedCategories}/>
            </div>
            <div className="py-1 w-full mx-auto">
                <SearchBar searchValue={search} setSearchValue={setSearch}/>
            </div>
            <div className="p-4 ">
                <Listings selectedCategories={selectedCategories} searchValue={search}/>
            </div>
        </main>
</RootLayout>
)
    ;
}
