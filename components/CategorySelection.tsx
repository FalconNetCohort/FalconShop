import React from 'react';
import {ToggleButtonGroup, ToggleButton, Select, MenuItem, FormControl, InputLabel, useMediaQuery, styled, Box} from '@mui/material';

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
                                                             }) => {
    const categories =['Books/Study', 'Clothing/Shoes', 'Electronics', 'Uniform', 'Vehicles', 'Cooking', 'Appliances', 'Other'];
    const isMobileView = useMediaQuery('(max-width:1020px)');

    return (
        <div className="flex items-center justify-center">
            {isMobileView ? (
                <Box sx={{width: '100%'}}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="select-outlined-label">Category Filter</InputLabel>
                        <Select
                            labelId="select-outlined-label"
                            id="select-outlined"
                            multiple
                            value={selectedCategories || []}
                            onChange={event => setSelectedCategories((event.target.value as string[]) || [])}
                            label="Category Filter"
                            MenuProps={{
                                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                                transformOrigin: { vertical: 'top', horizontal: 'left' },
                                getContentAnchorEl: null,
                            }}
                            sx={{ height: 'fit-content', minHeight: '32px', textAlign: 'center' }}
                        >
                            {categories.map(category => (
                                <MenuItem key={category} value={category} sx={{fontSize:"0.875rem", minHeight: "32px"}}>{category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            ) : (
                <ToggleButtonGroup
                    value={selectedCategories}
                    onChange={(_, newCategories) => setSelectedCategories(newCategories)}
                    aria-label="Category Selection"
                    className="flex flex-wrap justify-center p-3 w-full"
                >
                    {categories.map(category => (
                        <CustomToggleButton key={category} value={category} className="category">{category}</CustomToggleButton>
                    ))}
                </ToggleButtonGroup>
            )}
        </div>
    );
};

export default CategorySelection;