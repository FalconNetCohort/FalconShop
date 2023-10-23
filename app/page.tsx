import React from 'react';
import ClientComponent from './ClientComponent';

export default function CadetItems() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
                <p className="mb-8 text-center border-b border-gray-300 bg-gradient-to-b from-blue-500 to-blue-300 text-white py-6 rounded-xl shadow-lg backdrop-blur-md">
                    Explore recently posted Cadet listings
                </p>
            </div>

            {/* Cadet Items Listing */}
            <ClientComponent />
        </main>
    );
}
