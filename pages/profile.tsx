import React from 'react';
import RootLayout from '@/components/RootLayout';
import '../firebase';
import ItemUpload from "@/components/ItemUpload";
import { getAuth } from "firebase/auth";

export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    let umail = "jdoe@example.com"

    if(user != null && user.email != null){
        umail = user.email
    }

    return (
        <RootLayout>
            <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:center text-black">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <div className="flex items-center">
                            <div>
                                <p><strong>Email:</strong> {umail} </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Upload a Product</h2>
                        <ItemUpload/>
                    </section>
                </div>
            </main>
        </RootLayout>
    );
}