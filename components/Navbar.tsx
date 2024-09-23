// Assuming this is a Navbar component in a Next.js application
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getAuth, User } from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly if needed
import ProfileMenu from "@/components/ProfileMenu";


function PiiBanner() {
    return (
        <div style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '1000', background: 'red', color: 'white', textAlign: 'center', fontStyle: 'bold'}}>
            FalconShop is not approved for storing PII
        </div>
    );
}

export default function Navbar() {
    const router = useRouter();

    const handleClickFalconShop = () => {
        router.push('/');
    };

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
                        className={"cursor-pointer"}
                    />
                </div>
                <div className="flex items-center">
                    <span className="mr-2 md:mr-4 font-bold text-[0.6rem] md:text-sm lg:text-md xl:text-lg ">Supported by</span>
                    <Image
                        src="/assets/images/spark.png"
                        alt="Spark"
                        width={50}
                        height={50}
                        layout="fixed"
                    />
                </div>
                <div className="space-x-8">
                    <ProfileMenu/>
                </div>

            </nav>
            <PiiBanner/>
        </>
    );
}
