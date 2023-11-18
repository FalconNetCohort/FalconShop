import React from 'react';
import Listings from '../components/listings';
import RootLayout from '../components/RootLayout';
import '../firebase';

export default function Index() {
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center p-24 bg-gray-200">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:center">
                    <p className="mb-8 text-center border-b border-gray-300 text-white py-6 rounded-xl shadow-lg backdrop-blur-md bg-sky-700">
                        Digital Dazzle Depot
                    </p>
                </div>
                <Listings />
            </main>
        </RootLayout>
    );
}
