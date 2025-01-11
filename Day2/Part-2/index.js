function App() {
    const arr = [1, 2, 3, 4, 5];
    const cars = ["Toyota", "Honda", "Ford", "BMW", "Tesla"];
    const myVariable = {
        productName: "Watermelon",
        price: 12
        };
        const myArray = ['apple', 'banana', 'orange'];
        const myList =myArray.map((item, index) => <p key={index}>{item}</p>)
    return (
       <>
         <h2>Array is: {arr}</h2>
         {arr.map((value,index)=> <li  key={index}>value={value}</li>)}
        <p>productName:{myVariable.productName}</p>
        <p>Price:{myVariable.price}</p>
        <h1>Car</h1>
         <ul>
             {cars.map((name)=><li>{name}</li>)}
         </ul>
         {myList}
      </>
    );
  }
ReactDOM.createRoot(document.getElementById("root")).render(<App />);