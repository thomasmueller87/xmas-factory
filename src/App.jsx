import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Product from "./components/Product";
import Form from "./components/Form";

import { saveToLocal, loadFromLocal } from "./lib/localStorage";

function App() {
  const localStorageProduct = loadFromLocal("_products");

  const [products, setProducts] = useState(localStorageProduct ?? []);

  function addProduct(newProduct) {
    return setProducts([...products, newProduct]);
  }
  //Speichern im LocalStorage

  useEffect(() => {
    saveToLocal("_products", products);
  }, [products]);

  return (
    <>
      <Container className="App">
        <Form onAddProduct={addProduct} />

        {products.map((product, index) => (
          <Product
            key={index}
            index={index}
            name={product.name}
            price={product.price}
            isVegan={product.isVegan}
            category={product.category}
            packageSize={product.packageSize}
            email={product.email}
            tags={product.tags}
          />
        ))}
      </Container>
    </>
  );
}
export default App;
const Container = styled.div`
  max-width: 25rem;
  color: white;
  h2 {
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
