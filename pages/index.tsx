import React, {useState} from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import '../firebase';

export default function Index() {
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center py-1 bg-gray-100">
                <div className="z-10 w-full items-center justify-between font-bold text-lg lg:center">
                    <p className="mb-8 text-center border-b border-gray-300 text-gray-200 py-4 backdrop-blur-md bg-indigo-600">
                        FalconShop
                    </p>
                </div>
                <div className="p-4">
                    <Listings />
                </div>
            </main>
        </RootLayout>
    );
}
