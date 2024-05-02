// Assuming this is a Navbar component in a Next.js application
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAuth, User } from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly if needed
import { useRouter } from 'next/router';
import ProfileMenu from "@/components/ProfileMenu";


function PiiBanner() {
    return (
        <div style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '1000', background: 'red', color: 'white', textAlign: 'center'}}>
            FalconShop is not approved for storing PII (Phone Numbers)!
        </div>
    );
}

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Initialize loading state
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
            setUser(loggedInUser);
            setIsLoading(false); // Set loading state to false once user state is resolved
        });

        return () => unsubscribe();
    }, []);

    const handleClickFalconShop = () => {
        if (user?.emailVerified) {
            router.push('/');
        }
    };

    if (isLoading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return (
        <>
            <nav
                className="rounded-b-lg shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500 p-4 font-semibold flex items-center justify-between text-white">
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
                        <Link href="/auth" className="hover:text-yellow-300 transition-colors duration-200">
                            Login
                        </Link>
                    ) : (
                        <ProfileMenu/>
                    )}
                </div>

            </nav>
            <PiiBanner/>
        </>
    );
}
