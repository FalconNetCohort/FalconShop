import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import '../firebase.js'; // adjust the path accordingly


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const auth = getAuth();
    const router = useRouter();

    const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await router.push('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error during authentication:", error.message);
                setError(error.message);
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-black">
            <h1 className="text-2xl mb-4">Sign up for FalconShop</h1>
            {error && <p className="text-red-500">{error}</p>}
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