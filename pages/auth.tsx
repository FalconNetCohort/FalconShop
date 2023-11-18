import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../firebase';
import LogIn from "@/components/LogIn"; // adjust the path accordingly
import SignUp from "@/components/SignUp"; // adjust the path accordingly

export default function Auth() {
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
            <div>{isSignUp ? <LogIn/> : <SignUp/>}</div>
            <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-blue-500">
                {isSignUp ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
            </button>
        </div>
    );
}
