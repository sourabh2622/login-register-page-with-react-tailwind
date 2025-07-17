import React, { useState } from 'react'
import '../animations.css';
import { getLocalStorage, setLocalStorage } from '../localstorage/loginData';

const Login = ({ onSwitch }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let UserData = getLocalStorage();

  const LoginHandler = async (e) => {
    e.preventDefault();

    if (!UserData || UserData.length === 0) {
      setLocalStorage();
      UserData = [];
    }

    if (UserData && UserData.length > 0) {
      if (UserData.find(user => user.email == email && user.password == password)) {
        alert("Login successful.");
      } else {
        alert("Invalid credentials.")
      }
    } else {
      alert("Please First Register.");
      onSwitch();
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>

      {/* form */}
      <div className="border border-gray-100/50 w-full max-w-sm px-6 py-8 sm:px-8 sm:py-10 rounded-xl z-2 bg-[#1e1e1e]/20 backdrop-blur-none">
        <h1 className="text-2xl text-center">Sign In</h1>
        <form onSubmit={LoginHandler}>
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
            <button className="w-full bg-[#1e1e1e]/40 backdrop-blur-lg hover:bg-[#111]/20 transition duration-300 border border-white/20  rounded py-3 px-2 cursor-pointer">Sign in</button>
          </div>

        </form>

        <div className="text-sm text-center mt-3 text-gray-400">
          Don't have an account? <span className="text-white cursor-pointer hover:underline" onClick={onSwitch}>Sign up</span>
        </div>

      </div>

    </>
  )
}

export default Login
