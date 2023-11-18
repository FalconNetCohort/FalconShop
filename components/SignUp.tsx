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
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                // After successful sign-up, switch back to login view
                setIsSignUp(false);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                window.location.href = '/';
            }
        } catch (error: any) {
            console.error("Error during authentication:", error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-black">
            <h1 className="text-2xl mb-4">Sign Up</h1>
            <form onSubmit={handleAuth} className="w-64">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    {isSignUp ? 'Sign Up' : 'Log In'}
                </button>
            </form>
        </div>
    );
}