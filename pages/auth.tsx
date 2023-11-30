import React, { useState } from 'react';
import LogIn from "@/components/LogIn"; // adjust the path accordingly
import SignUp from "@/components/SignUp"; // adjust the path accordingly

export default function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (

    <div className="auth-global">
            <div>{isSignUp ? <LogIn/> : <SignUp/>}</div>
            <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-blue-500 hover:underline">
                {isSignUp ? 'Don’t have an account? Sign Up' : 'Already have an account? Log In'}
            </button>
        </div>
    );
}
