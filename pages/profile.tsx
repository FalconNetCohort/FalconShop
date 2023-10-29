import React from 'react';
import RootLayout from '../components/RootLayout';
import '../firebase';
import AddCadetItem from "@/components/AddCadetItem";

export default function Profile() {
    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:center text-black">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <div className="flex items-center">
                            <img src="/path-to-profile-image.jpg" alt="User profile" className="w-24 h-24 rounded-full mr-4"/>
                            <div>
                                <p><strong>Name:</strong> John Doe</p>
                                <p><strong>Email:</strong> john.doe@example.com</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Upload a Product</h2>
                        <AddCadetItem/>
                    </section>
                </div>
            </main>
        </RootLayout>
    );
}
