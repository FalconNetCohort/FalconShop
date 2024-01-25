'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getAuth, User } from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly
import router from 'next/router.js';

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

    const handleLogout = async () => {
        const auth = getAuth();
        await auth.signOut();
        router.push('/auth'); // Redirect to '/auth' after logout
    };

    return (
        <nav className="flex justify-between items-center bg-indigo-800 p-4 text-yellow-50">
            <Link rel="icon" href="/" className="">
                <img
                    src="/assets/images/FalconShop_Logo.png"
                    alt="FalconShop"
                    style={{ width: '250px', height: 'auto' }} // Adjust the width as needed

                />
            </Link>
            <div className="space-x-4">
                {!user ? (
                    <>
                        <Link href="/profile">Post</Link>
                        <Link href="/auth">Login</Link>
                    </>
                ) : (
                    <>
                        <Link href="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}