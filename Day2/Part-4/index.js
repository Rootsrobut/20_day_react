function CarPage() {
    const Cars = [
      {
        Name: "Nexa",
        average: 18,
        img: "https://cdn-icons-png.flaticon.com/128/741/741407.png",
      },
      {
        Name: "Toyota",
        average: 20,
        img: "https://cdn-icons-png.flaticon.com/128/741/741408.png",
      },
      {
        Name: "Honda",
        average: 22,
        img: "https://cdn-icons-png.flaticon.com/128/741/741409.png",
      },
      {
        Name: "Volkswagen",
        average: 24,
        img: "https://cdn-icons-png.flaticon.com/128/741/741414.png",
      },
    ];
    
    return (
      <>
        <h1>Cars Details</h1>
        <table className="tab">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {Cars.map((car, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={car.img}
                    alt={car.Name}
                    style={{ width: "50px", height: "auto" }}
                  />
                </td>
                <td>{car.Name}</td>
                <td>{car.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  function ProductPage() {
    const products = [
      {
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        image: "https://example.com/images/wireless-mouse.png"
      },
      {
        id: 2,
        name: "Bluetooth Headphones",
        price: 59.99,
        category: "Electronics",
        image: "https://example.com/images/bluetooth-headphones.png"
      },
      {
        id: 3,
        name: "Gaming Keyboard",
        price: 89.99,
        category: "Electronics",
        image: "https://example.com/images/gaming-keyboard.png"
      }
    ];
    
    return (
      <>
        <h1>Product Page</h1>
        <table className="tab">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Category</th>
              <th>Product Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px", height: "auto" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  function App() {
    let showcars=false;
    // if(showcars){
    //     return <ProductPage />
    //   }
    // else{
    //     return <CarPage />  
    // } 
    return showcars ? <ProductPage /> : <CarPage />

    
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
