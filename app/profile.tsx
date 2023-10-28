// profile.tsx
import React from 'react';
import { getAuth } from 'firebase/auth';
import './firebaseInit'; // adjust the path accordingly

export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) return <div>Please log in to view your profile.</div>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl mb-4">Profile</h1>
            <p>Email: {user.email}</p>
        </div>
    );
}
