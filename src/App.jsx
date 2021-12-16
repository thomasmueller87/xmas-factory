import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Product from "./components/Product";
import ProductTags from "./components/ProductTags";
import isValid from "./lib/validation";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

function App() {
  const initialProduct = {
    name: "",
    price: "",
    isVegan: false,
    tags: [],
    category: "",
    packageSize: "",
    email: "",
  };
  const localStorageProduct = loadFromLocal("_products");
  const [product, setProduct] = useState(initialProduct);

  const [products, setProducts] = useState(localStorageProduct ?? []);

  //Speichern im LocalStorage

  useEffect(() => {
    saveToLocal("_products", products);
  }, [products]);

  function updateTags(tag) {
    const updatedTags = [...product.tags, tag];
    setProduct({ ...product, tags: updatedTags });
  }

  function handleDelete(tagToDelete) {
    const newArray = product.tags.filter((tag) => {
      return tag !== tagToDelete;
    });
    setProduct({ ...product, tags: newArray });
  }

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
    //Prüfung ob etwas eingegeben wurde
    if (isValid(product)) {
      setProducts([...products, product]);
      setProduct(initialProduct);
    }
  };
  const handleReset = () => {
    setProduct(initialProduct);
  };
  return (
    <>
      <Container className="App">
        <h1>Wünsch Dir Was!❤️</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Produkt: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={product.name}
          />
          <label htmlFor="price">Wunschpreis: </label>
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
          <label htmlFor="category">Kategorie: </label>
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
            Paketgröße:
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
          <ProductTags
            label="Product TagZZZZZ"
            tags={product.tags}
            onDelete={handleDelete}
            onUpdateTags={updateTags}
          />
          <label htmlFor="email">Deine Email für Rückfragen: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={product.email}
          />
          <div>
            <button>Add product</button>
            <input type="reset" value="reset" onClick={handleReset} />
          </div>
        </form>

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
