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
            className="flex flex-wrap justify-center p-3 w-full"
        >
            <ToggleButton value="Books/Study" className="category">Books/Study</ToggleButton>
            <ToggleButton value="Clothing/Shoes" className="category">Clothing/Shoes</ToggleButton>
            <ToggleButton value="Electronics" className="category">Electronics</ToggleButton>
            <ToggleButton value="Uniform" className="category">Uniform</ToggleButton>
            <ToggleButton value="Vehicles"  className="category">Vehicles</ToggleButton>
            <ToggleButton value="Cooking"  className="category">Cooking</ToggleButton>
            <ToggleButton value="Appliances"  className="category">Appliances</ToggleButton>
            <ToggleButton value="Other"  className="category">Other</ToggleButton>
        </ToggleButtonGroup>
    </div>
);

export default CategorySelection;