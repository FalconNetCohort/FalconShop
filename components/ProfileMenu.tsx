import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import {getAuth} from "firebase/auth";
import router from "next/router";

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                edge='end'
                aria-label='open menu for current user'
                aria-haspopup='true'
                aria-controls='profile-menu'
                onClick={handleProfileMenuOpen}>
                <AccountCircle />
            </IconButton>

            <Menu
                id='profile-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}>
                <MenuItem onClick={handleProfileMenuClose}><Link href="/profile"/>Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}