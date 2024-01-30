import { alpha, styled, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: '1px solid #000',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
        maxWidth: '80%', // Adjust for small devices
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '50%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%', // Make sure this takes the full width of parent div
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Adjust for search icon
        transition: theme.transitions.create('width'),
    },
}));

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue }) => (
    <SearchContainer>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for a product"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
                className="max-h-fit align-middle"
            />
        </Search>
    </SearchContainer>
);