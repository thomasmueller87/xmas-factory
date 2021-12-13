function Product({ name, price, isVegan, category, packageSize, email }) {
  return (
    <>
      <section>
        <h3>{name}</h3>
        <p>
          {price} EUR // {isVegan ? "Veggie" : "Not vegan"}
        </p>
        <p>
          Category {category} // Package Size: {packageSize}
        </p>
        <p>Your E-Mail: {email}</p>
      </section>
    </>
  );
}

export default Product;
