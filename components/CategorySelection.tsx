import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled } from '@mui/system';

interface CategorySelectionProps {
    selectedCategories: string[];
    setSelectedCategories: (newCategories: string[]) => void;
}
const CustomToggleButton = styled(ToggleButton)({
    '&.Mui-selected': {
        backgroundColor: 'lightblue',
        '&:hover': {
            backgroundColor: 'blue',
        },
        color: 'white',
    },
});
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
            <CustomToggleButton value="Books/Study" className="category">Books/Study</CustomToggleButton>
            <CustomToggleButton value="Clothing/Shoes" className="category">Clothing/Shoes</CustomToggleButton>
            <CustomToggleButton value="Electronics" className="category">Electronics</CustomToggleButton>
            <CustomToggleButton value="Uniform" className="category">Uniform</CustomToggleButton>
            <CustomToggleButton value="Vehicles" className="category">Vehicles</CustomToggleButton>
            <CustomToggleButton value="Cooking" className="category">Cooking</CustomToggleButton>
            <CustomToggleButton value="Appliances" className="category">Appliances</CustomToggleButton>
            <CustomToggleButton value="Other" className="category">Other</CustomToggleButton>
        </ToggleButtonGroup>
    </div>
);

export default CategorySelection;