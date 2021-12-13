import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const initialProduct = {
    name: "",
    price: "",
    isVegan: false,
    category: "",
    packageSize: "",
    email: "",
  };

  const [product, setProduct] = useState(initialProduct);

  const [products, setProducts] = useState([]);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (event.target.type === "checkbox") {
      inputValue = event.target.checked;
    }
    if (event.target.name === "price") {
      inputValue = Number(inputValue);
    }
    setProduct({
      ...product,
      [event.target.name]: inputValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setProducts([...products, product]);
  };
  const handleReset = () => {
    setProduct(initialProduct);
  };
  return (
    <>
      <Container className="App">
        <h2>Weihnachts-Store</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Productname: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={product.name}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            value={product.price}
          />
          <label>
            vegan:
            <input
              type="checkbox"
              name="isVegan"
              id="isVegan"
              onChange={handleChange}
              checked={product.isVegan}
            />
          </label>
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={product.category}
          >
            <option value="" disabled>
              ...choose a category
            </option>
            <option value="drinks">Drinks</option>
            <option value="food">Food</option>
            <option value="tools">Tools</option>
          </select>
          <label htmlFor="packageSize" className="package">
            Package size:
            <label htmlFor="packageSize">S</label>
            <input
              type="radio"
              name="packageSize"
              id="packageSize"
              value="S"
              onChange={handleChange}
              checked={product.packageSize === "S"}
            />
            <label htmlFor="packageSize">M</label>
            <input
              type="radio"
              name="packageSize"
              id="packageSize"
              value="M"
              onChange={handleChange}
              checked={product.packageSize === "M"}
            />
            <label htmlFor="packageSize">L</label>
            <input
              type="radio"
              name="packageSize"
              id="packageSize"
              value="L"
              onChange={handleChange}
              checked={product.packageSize === "L"}
            />
          </label>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={product.email}
          />
          <button>Add product</button>
          <input type="reset" value="reset" onClick={handleReset} />
        </form>

        {products.map((product, index) => (
          <section>
            <p>Item# {index + 1}</p>
            <h3>{product.name}</h3>
            <p>
              {product.price} EUR // {product.isVegan ? "Veggie" : "Not vegan"}
            </p>
            <p>
              Category {product.category} // Package Size: {product.packageSize}
            </p>
            <p>Your E-Mail: {product.email}</p>
          </section>
        ))}
      </Container>
    </>
  );
}
export default App;
const Container = styled.div`
  max-width: 25rem;
  margin: auto;
  form {
    padding: 2rem;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    padding: 0.25rem;
    margin-bottom: 1rem;
  }
  select {
    margin-bottom: 1rem;
  }
  .package {
    display: flex;
    justify-content: space-around;
  }
`;
