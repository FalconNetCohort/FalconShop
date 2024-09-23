import React, {useEffect, useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import {useRouter} from "next/router";
import {getAuth, User} from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";

export default function ProfileMenu() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Initialize loading state
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
            setUser(loggedInUser);
            setIsLoading(false); // Set loading state to false once user state is resolved
        });

        return () => unsubscribe();
    }, []);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        router.push('/profile'); // Navigate to profile on click
        handleClose();
    };

    const handleLogout = async () => {
        const auth = getAuth();
        await auth.signOut();
        await router.push('/auth'); // Redirect to '/auth' after logout
        handleClose();
    };

    const handleLogin = async () => {
        await router.push('/auth'); // Redirect to '/auth' after logout
        handleClose();
    }

    const handleFeedback = () => {
        router.push('https://forms.office.com/r/3FJZaMMXZt'); // Navigate to feedback on click
        handleClose();
    };

    if (isLoading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            {!user ? (
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogin}>Login</MenuItem>

                    </Menu>
            ) : (
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfile}>My Account</MenuItem>
                    <MenuItem onClick={handleFeedback}>Feedback</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            )}
        </div>
    );
}