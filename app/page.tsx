import React, { Suspense } from 'react';
import Listings from './Listings';
import AddCadetItem from "./AddCadetItem";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
                <p className="mb-8 text-center border-b border-gray-300 bg-gradient-to-b from-blue-500 to-blue-300 text-white py-6 rounded-xl shadow-lg backdrop-blur-md">
                    Cadet Listings
                </p>
            </div>

            {/* Cadet Items Listing */}
            <Suspense fallback={<div>Loading...</div>}>
                <AddCadetItem/>
                <Listings />
            </Suspense>
        </main>
    );
}
