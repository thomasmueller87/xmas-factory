import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Product from "./components/Product";
import Form from "./components/Form";

import { saveToLocal, loadFromLocal } from "./lib/localStorage";

function App() {
  const localStorageProduct = loadFromLocal("_products");
  const localStorageFav = loadFromLocal("_favorites");

  const [products, setProducts] = useState(localStorageProduct ?? []);
  const [favProducts, setFavProducts] = useState(localStorageFav ?? []);

  function isFavProduct(favProduct) {
    return favProducts.some((every) => every.id === favProduct.id);
  }

  function remFromFav(favProduct) {
    return favProducts.filter((every) => every.id !== favProduct.id);
  }

  function addProduct(newProduct) {
    return setProducts([...products, newProduct]);
  }

  function addToFavorites(favProduct) {
    if (isFavProduct(favProduct)) {
      const keepFavorite = remFromFav(favProduct);
      setFavProducts(keepFavorite);
    } else {
      setFavProducts([...favProducts, favProduct]);
    }
  }
  //Speichern im LocalStorage

  useEffect(() => {
    saveToLocal("_products", products);
  }, [products]);

  useEffect(() => {
    saveToLocal("_favorites", favProducts);
  }, [favProducts]);

  return (
    <>
      <Container className="App">
        <Form onAddProduct={addProduct} />

        {products.map((product, index) => (
          <Product
            product={product}
            key={index}
            index={index}
            name={product.name}
            price={product.price}
            isVegan={product.isVegan}
            category={product.category}
            packageSize={product.packageSize}
            email={product.email}
            tags={product.tags}
            onAddToFavorites={addToFavorites}
            onIsFavProduct={isFavProduct}
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
