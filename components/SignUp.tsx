import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User} from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly


export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const auth = getAuth();

    const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
                await createUserWithEmailAndPassword(auth, email, password);
                // After successful sign-up, switch back to login view
                setIsSignUp(false);
        } catch (error: any) {
            console.error("Error during authentication:", error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-black">
            <h1 className="text-2xl mb-4">Sign up for FalconShop</h1>
            <form onSubmit={handleAuth} className="w-64">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3 p-2 ml-7 border rounded shadow-lg"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-3 p-2 ml-7 border rounded shadow-lg"
                />
                <button type="submit" className="w-full mt-4 p-2 bg-indigo-600 text-white text-md rounded shadow-lg hover:animate-pulse">
                    Create FalconShop account
                </button>
            </form>
        </div>
    );
}