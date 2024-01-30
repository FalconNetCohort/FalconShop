import { ToggleButtonGroup, ToggleButton } from '@mui/material';

interface CategorySelectionProps {
    selectedCategories: string[];
    setSelectedCategories: (newCategories: string[]) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
                                                                 selectedCategories,
                                                                 setSelectedCategories,
                                                             }) => (
    <div className="flex items-center justify-center">
        <ToggleButtonGroup
            value={selectedCategories}
            onChange={(_, newCategories) => setSelectedCategories(newCategories)}
            aria-label="Category Selection"
            className="flex flex-wrap justify-around"
        >
            <ToggleButton value="Books/Study" className="my-2 rounded-lg font-bold border-2 border-blue-500">Books/Study</ToggleButton>
            <ToggleButton value="Clothing/Shoes" className="my-2 rounded-lg font-bold border-2 border-blue-500">Clothing/Shoes</ToggleButton>
            <ToggleButton value="Electronics" className="my-2 rounded-lg font-bold border-2 border-blue-500">Electronics</ToggleButton>
            <ToggleButton value="Uniform" className="my-2 rounded-lg font-bold border-2 border-blue-500">Uniform</ToggleButton>
            <ToggleButton value="Vehicles"  className="my-2 rounded-lg font-bold border-2 border-blue-500">Vehicles</ToggleButton>
            <ToggleButton value="Cooking"  className="my-2 rounded-lg font-bold border-2 border-blue-500">Cooking</ToggleButton>
            <ToggleButton value="Appliances"  className="my-2 rounded-lg font-bold border-2 border-blue-500">Appliances</ToggleButton>
            <ToggleButton value="Other"  className="my-2 rounded-lg font-bold border-2 border-blue-500">Other</ToggleButton>
        </ToggleButtonGroup>
    </div>
);

export default CategorySelection;