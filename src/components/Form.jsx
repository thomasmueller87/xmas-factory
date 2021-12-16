import { useState } from "react";
import ProductTags from "./ProductTags";
import isValid from "../lib/validation";

function Form({ onAddProduct }) {
  const initialProduct = {
    name: "",
    price: "",
    isVegan: false,
    tags: [],
    category: "",
    packageSize: "",
    email: "",
  };

  const [product, setProduct] = useState(initialProduct);

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
      onAddProduct(product);
      setProduct(initialProduct);
    }
  };

  function updateTags(tag) {
    const updatedTags = [...product.tags, tag];
    setProduct({ ...product, tags: updatedTags });
  }

  const handleReset = () => {
    setProduct(initialProduct);
  };

  return (
    <>
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
    </>
  );
}

export default Form;
