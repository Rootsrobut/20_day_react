import { useState,useEffect } from 'react';

export default function Input() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  // useEffect(()=>{
  //   document.title = name+" "+lastname;  //  componentDidUpdate never use 
  // })
  // useEffect(()=>{
  //   document.title = name+" "+lastname;   //  componentDidMount
  // },[])
  useEffect(()=>{
    document.title = name+" "+lastname;  //  componentDidUpdate
  },[name,lastname])
  useEffect(()=>{
    let timer = setInterval(() => {
      console.log("window_width:", window.innerWidth);
    }, 2000);
    return (clearInterval(timer));
  })
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello, {name + " " + lastname}</h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
