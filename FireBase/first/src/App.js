// import { getDatabase, ref, set } from 'firebase/database';
// import app from './Firebase.js';

// const db = getDatabase(app);

// function App() {
//   const putData = () => {
//     set(ref(db, 'users/sumit'), {
//       id: 1,
//       name: 'sumit',
//       course: 'B.Tech'
//     })
//       .then(() => {
//         console.log('Data written successfully!');
//       })
//       .catch((error) => {
//         console.error('Error writing data:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Firebase</h1>
//       <button onClick={putData}>Put Data</button>
//     </div>
//   );
// }

// export default App;

//authcation

import SignupPage from './pages/SignUp';
import SignInPage from  './pages/signIn'
import './index.css'


import { useState } from 'react';

function App() {
  const [login,setlogin]=useState(true)
  return (
    <div className="App">
      <h1>Firebase</h1>
      <br />
      <button onClick={()=>{setlogin(!login)}}>{login===true?'SignupPage':'SignInPage'}</button>
      {login===true?<SignupPage/> : <SignInPage/>}
    </div>
  );
}

export default App;

