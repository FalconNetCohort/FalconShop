'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
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
        await router.push('/auth'); // Redirect to '/auth' after logout
    };

    return (
        <nav className="rounded-b-lg shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500 p-4 font-semibold flex items-center justify-between text-white">
            <Link href="/">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/assets/images/FalconShop_Logo.png"
                        alt="FalconShop"
                        width={200}
                        height={200}
                        layout="fixed"
                    />
                </div>
            </Link>
            <div className="space-x-8">
                {!user ? (
                    <Link href="/auth" className="hover:text-yellow-300 transition-colors duration-200">Login</Link>
                ) : (
                    <>
                        <Link href="/profile" className="hover:text-yellow-300 transition-colors duration-200">Profile/Upload Item</Link>
                        <button onClick={handleLogout} className="rounded-lg bg-red-500 hover:bg-red-600 text-white py-1 px-4 transition-colors duration-200">Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}