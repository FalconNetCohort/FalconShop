import { ToggleButtonGroup, ToggleButton } from '@mui/material';

interface CategorySelectionProps {
    selectedCategories: string[];
    setSelectedCategories: (newCategories: string[]) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
                                                                 selectedCategories,
                                                                 setSelectedCategories,
                                                             }) => (
    <div className="p-4 flex items-center justify-center">
        <ToggleButtonGroup
            value={selectedCategories}
            onChange={(_, newCategories) => setSelectedCategories(newCategories)}
            aria-label="Category Selection"
        >
            <ToggleButton value="Books/Study">Books/Study</ToggleButton>
            <ToggleButton value="Clothing/Shoes">Clothing/Shoes</ToggleButton>
            <ToggleButton value="Electronics">Electronics</ToggleButton>
            <ToggleButton value="Uniform">Uniform</ToggleButton>
            <ToggleButton value="Vehicles">Vehicles</ToggleButton>
            <ToggleButton value="Cooking">Cooking</ToggleButton>
            <ToggleButton value="Appliances">Appliances</ToggleButton>
            <ToggleButton value="Other">Other</ToggleButton>



        </ToggleButtonGroup>
    </div>
);

export default CategorySelection;