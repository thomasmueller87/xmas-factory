import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [product, setProduct] = useState({
    name: "Schnapps",
    price: 50,
    isVegan: true,
    category: "",
    packageSize: "",
    contactEmail: "",
  });
  const handleChange = (event) => {
    let inputValue = event.target.value;

    if (event.target.type === "checkbox") {
      inputValue = event.target.checked;
    }
    setProduct({
      //alle bestehenden Probs behalten
      ...product,
      //neue Daten
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
  };
  console.log(product);
  return (
    <div className="App">
      <Container>
        <h2>Add a new product</h2>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={product.name}
          />

          <label htmlFor="price">Price (in EUR)</label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={handleChange}
            value={product.price}
          />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              id="isVegan"
              onChange={handleChange}
              checked={product.isVegan}
            />{" "}
            vegan
          </label>

          <button>Add Product</button>
        </Form>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 24rem;
  margin: 0 auto;
`;

const Form = styled.form`
  label {
    display: block;
    font-weight: bold;
  }
  input {
    padding: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

export default App;
