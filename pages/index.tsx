import React, {useState} from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../firebase';

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
                    {/* Use ToggleButtonGroup and ToggleButton for category filtering */}
                    <ToggleButtonGroup
                        value={selectedCategories}
                        onChange={(_, newCategories) => setSelectedCategories(newCategories)}
                        aria-label="Category Selection"
                    >
                        <ToggleButton value="Books/Study">
                            Books/Study
                        </ToggleButton>
                        <ToggleButton value="Clothing/Shoes">
                            Clothing/Shoes
                        </ToggleButton>
                        <ToggleButton value="Electronics">
                            Electronics
                        </ToggleButton>
                        <ToggleButton value="Uniform">
                            Uniform
                        </ToggleButton>
                        <ToggleButton value="Vehicles">
                            Vehicles
                        </ToggleButton>
                        <ToggleButton value="Cooking">
                            Cooking
                        </ToggleButton>
                        <ToggleButton value="Appliances">
                            Appliances
                        </ToggleButton>
                        <ToggleButton value="Other">
                            Other
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="p-4">
                    <Listings selectedCategories={selectedCategories} />
                </div>
            </main>
        </RootLayout>
    );
}
