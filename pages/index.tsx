import React from 'react';
import Listings from '../components/Listings';
import RootLayout from '../components/RootLayout';
import '../firebase';

export default function Index() {
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center py-1 bg-gray-100">
                <div className="p-4">
                    <Listings />
                </div>
            </main>
        </RootLayout>
    );
}
