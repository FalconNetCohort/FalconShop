'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAuth, User } from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        setUser(auth.currentUser);
    }, []);

    return (
        <nav className="flex justify-between items-center bg-blue-500 p-4 text-white">
            <Link href="/" className="text-2xl font-bold">FalconShop</Link>
            <div className="space-x-4">
                {!user ? (
                    <>
                        <Link href="/">Login</Link>
                        <Link href="/auth">Sign Up</Link>
                    </>
                ) : (
                    <>
                        <Link href="/profile">Profile</Link>
                        <button onClick={() => getAuth().signOut()}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}
