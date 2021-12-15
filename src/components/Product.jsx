import styled from "styled-components";

function Product({
  index,
  name,
  price,
  isVegan,
  category,
  packageSize,
  email,
  tags,
}) {
  return (
    <>
      <SectionStyle>
        <WhiteBorder>
          <ItemNoStyle>Item# {index + 1}</ItemNoStyle>
          <h2>{name}</h2>
          <DataStyle>
            {price} EUR // {isVegan ? "Veggie" : "Not vegan"}
          </DataStyle>
          <DataStyle>
            Category {category} // Package Size: {packageSize}
          </DataStyle>
          <DataStyle>Your E-Mail: {email}</DataStyle>
          <div>{tags.sort().join(", ")}</div>
        </WhiteBorder>
      </SectionStyle>{" "}
    </>
  );
}

export default Product;

const SectionStyle = styled.section`
  border: 1px black solid;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 1rem;
  margin-left: 0;
  background: #982806;
  color: white;
  box-shadow: 5px 5px 20px black;
`;

const WhiteBorder = styled.div`
  border: white 1px solid;
  padding: 0.3rem;
  border-radius: 5px;
`;

const ItemNoStyle = styled.p`
  font-size: 0.7rem;
  text-align: right;
`;

const DataStyle = styled.p`
  background: rgba(255, 255, 255, 0.3);
  padding: 0.2rem;
  border-radius: 5px;
`;
