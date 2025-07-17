import React, { useState } from 'react'
import '../animations.css';
import { getLocalStorage, setLocalStorage } from '../localstorage/loginData';

const Register = ({ onSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let UserData = getLocalStorage();

    const LoginHandler = async (e) => {
        e.preventDefault();

        if (!UserData || UserData.length === 0) {
            setLocalStorage();
            UserData = [];
        }

        const existingUser = UserData.find(user => user.email == email);

        if (existingUser) {
            alert("User already existing");
        }

        const lastID = UserData.length;

        const newUser = { 'id': lastID + 1, 'name': name, 'email': email, 'password': password };
        localStorage.setItem("loginData", JSON.stringify([...UserData, newUser]));

        setEmail('');
        setPassword('');
        setName('');

        onSwitch();
    };

    return (
        <>
            {/* form */}
            <div className="border-[1px] border-gray-100/50 w-full max-w-sm p-8 rounded-xl z-2 bg-[#1e1e1e]/20 backdrop-blur-md">
                <h1 className="text-2xl text-center">Sign up</h1>
                <form onSubmit={LoginHandler}>

                    <div className="mt-5">
                        <input type="text" name="name" id="name" className="border-[1px] border-gray-100/50 outline-none w-full rounded py-3 px-3" placeholder="Enter name here"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="mt-5">
                        <input type="email" name="email" id="email" className="border-[1px] border-gray-100/50 outline-none w-full rounded py-3 px-3" placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <div className="mt-5">
                        <input type="password" name="password" id="password" className="border-[1px] border-gray-100/50 outline-none w-full rounded py-3 px-3" placeholder="Enter password here"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <div className="mt-5">
                        <button className="w-full bg-[#1e1e1e]/40 backdrop-blur-lg hover:bg-[#111]/20 transition duration-300 border border-white/20  rounded py-3 px-2 cursor-pointer">Sign up</button>
                    </div>

                </form>

                <div className="text-sm text-center mt-3 text-gray-400">
                    Don't have an account? <span className="text-white cursor-pointer hover:underline" onClick={onSwitch}>Sign in</span>
                </div>

            </div>
        </>
    )
}

export default Register
