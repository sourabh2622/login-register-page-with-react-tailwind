import React, { useState } from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register';

const Auth = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center h-screen w-full">

                <div className="absolute flex items-center justify-center h-screen w-full bg-black text-white overflow-hidden">

                    {/* Stars background layer */}
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
                </div>

                {/* planet */}
                <div
                    className="planet w-[700px] h-[700px] absolute rounded-full opacity-30 z-1"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, #ffffff, #1e1e1e, #0f0f0f)',
                    }}
                ></div>

                {showLogin ? <Login onSwitch={() => setShowLogin(false)} /> : <Register onSwitch={() => setShowLogin(true)} />}

            </div>
        </>
    )
}

export default Auth
