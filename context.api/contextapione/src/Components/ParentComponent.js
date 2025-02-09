import { useState } from "react";
import ChildComponent from "./ChildComponent"; 
import colorContext from "../context";
const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");
  console.log(colorContext);

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <colorContext.Provider value={{color,setColor}}>
         <ChildComponent/>
      </colorContext.Provider>
    </>
  );
};

export default ParentComponent;
