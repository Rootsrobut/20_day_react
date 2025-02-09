import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase'; 

const auth = getAuth(app)

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUser=()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        console.log('user signIN')

    }).catch((error)=>{
        console.log("User not Present");
    })
  }

  return (
    <div className="signin-page">
      <h2>Sign In</h2>

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

      <button type="submit" onClick={signUser}>Sign In</button>
    </div>
  );
};

export default SignInPage;
