'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

import { getAuth, User } from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly
import router from 'next/router.js';

function PiiBanner() {
    return (
        <div style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '1000', background: 'red', color: 'white', textAlign: 'center'}}>
            FalconShop is not approved for storing PII (Phone Numbers)!
        </div>
    )
}

function ProfileMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

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
                <PersonIcon />
            </IconButton>
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
                <MenuItem onClick={handleProfile}>Profile/Upload Item</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
            if (loggedInUser) {
                setUser(loggedInUser);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleClickFalconShop = () => {
        if (user?.emailVerified) {
            router.push('/');
        }
    };

    return (
        <>
            <nav className="rounded-b-lg shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500 p-4 font-semibold flex items-center justify-between text-white">
                <div className="flex items-center space-x-3" onClick={handleClickFalconShop}>
                    <Image
                        src="/assets/images/FalconShop_Logo.png"
                        alt="FalconShop"
                        width={200}
                        height={200}
                        layout="fixed"
                        className={(user && user.emailVerified) ? "cursor-pointer" : ""}
                    />
                </div>
                <div className="flex items-center">
                    <span className="mr-5 font-bold">Supported by</span>
                    <Image
                        src="/assets/images/spark.png"
                        alt="Spark"
                        width={100}
                        height={100}
                        layout="fixed"
                    />
                </div>
                <div className="space-x-8">
                    {!user ? (
                        <Link href="/auth" className="hover:text-yellow-300 transition-colors duration-200">Login</Link>
                    ) : (
                        <ProfileMenu />
                    )}
                </div>
            </nav>
            <PiiBanner />
        </>
    );
}