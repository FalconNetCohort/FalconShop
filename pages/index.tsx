import React, {useState} from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import '../firebase';
import CategorySelection from '../components/CategorySelection';


export default function Index() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


    const handleCategoryToggle = (category: string) => {
        const currentIndex = selectedCategories.indexOf(category);
        const newSelected = [...selectedCategories];

        if (currentIndex === -1) {
            newSelected.push(category);
        } else {
            newSelected.splice(currentIndex, 1);
        }

        setSelectedCategories(newSelected);
    };

    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col py-1 bg-gray-100">
                <div className="p-4 flex flex-col items-center">
                    <CategorySelection selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                </div>
                <div className="p-4">
                    <Listings selectedCategories={selectedCategories} />
                </div>
            </main>
        </RootLayout>
    );
}
