import React, { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Auth = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
            {/* Stars background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {Array.from({ length: 50 }).map((_, i) => (
                    <span
                        key={i}
                        className="absolute block w-[2px] h-[2px] bg-white rounded-full star"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random(),
                            animationDelay: `${Math.random() * 20}s`,
                        }}
                    />
                ))}
            </div>

            {/* Planet */}
            <div
                className="planet absolute rounded-full opacity-30 z-0
                    w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px]"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, #ffffff, #1e1e1e, #0f0f0f)',
                }}
            ></div>

            {/* Auth form */}
                <div className="relative z-10 px-4 w-full max-w-[420px]">
                {showLogin ? (
                    <Login onSwitch={() => setShowLogin(false)} />
                ) : (
                    <Register onSwitch={() => setShowLogin(true)} />
                )}
            </div>
        </div>
    );
};

export default Auth;
