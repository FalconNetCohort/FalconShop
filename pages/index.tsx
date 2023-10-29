import React from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import '../firebase';

export default function Index() {
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:center">
                    <p className="mb-8 text-center border-b border-gray-300 bg-gradient-to-b from-blue-500 to-blue-300 text-white py-6 rounded-xl shadow-lg backdrop-blur-md">
                        Cadet Listings
                    </p>
                </div>
                <Listings />
            </main>
        </RootLayout>
    );
}
