import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import '../firebase.js';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const auth = getAuth();
    const router = useRouter();

    const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (error: any) {
            console.error("Error during authentication:", error.message);
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-black">
            <h1 className="text-3xl mb-4">Log In</h1>
            {errorMessage && <div className="alert alert-danger text-red-500">{errorMessage}</div>}
            <form onSubmit={handleAuth} className="w-64">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border rounded w-64"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 p-2 border rounded w-64"
                />
                <button type="submit" className="w-full p-2 bg-indigo-500 text-white rounded mb-4">
                    Log In
                </button>
            </form>

            <Link href="/forgot-password" className="text-indigo-500 hover:underline">
                Forgot password?
            </Link>
        </div>
    );
}