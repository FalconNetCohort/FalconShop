import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const auth = getAuth();
    const router = useRouter(); // Initialize the useRouter object

    const sendResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('An email has been sent to your email address. Please click the link in that email to reset your password.');

            // After the password reset email is sent, route to login page
            await router.push('/auth');
        } catch (error: any) {
            console.error("Error sending password reset email:", error.message);
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-black min-h-screen">
            <h1 className="text-3xl mb-4">Forgot password</h1>
            {errorMessage && <div className="alert alert-danger text-red-500">{errorMessage}</div>}
            {message && <div className="alert alert-success text-green-500">{message}</div>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border rounded w-64"
            />
            <button onClick={sendResetEmail} className="w-64 p-2 bg-indigo-500 text-white rounded mb-4">
                Send password reset email
            </button>
        </div>
    );
}