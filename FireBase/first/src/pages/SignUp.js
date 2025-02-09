import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase'; 

const auth = getAuth(app)

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then((value) => {
        console.log(value);
    }).catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <label>Email</label>
      <input 
        type="email" 
        required 
        placeholder="Enter your email here" 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <label>Password</label>
      <input 
        type="password" 
        required 
        placeholder="Enter your password here" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit" onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
