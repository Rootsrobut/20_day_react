// import { useState} from "react";
import useLocalStore from "./LocalStore";
export default function Reset(){
    // const [email,setEmail] = useState("");
    // useEffect(()=>{
    //   const email=localStorage.getItem('email');
    //   if(email){
    //     setEmail(email);
    //   }
    //   },[]);
    // useEffect(()=>{
    //      localStorage.setItem('email',email);
    // },[email]);


    const {email,setEmail}=useLocalStore(); 


    return(
        <>
        <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button  onClick={() => {}}>Submit</button>      
      <br />
      </>
    )
}