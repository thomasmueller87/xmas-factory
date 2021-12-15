import { useState } from "react";
import styled from "styled-components";
import "../App.css";

function ProductTags({ label, tags, onDelete, onUpdateTags }) {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (event) => {
    const tagInputValue = event.target.value;
    setTagInput(tagInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput("");
    }
    if (event.key === "Backspace" && tagInput === "") {
      onDelete(tags[tags.length - 1]);
    }
  };

  return (
    <TagsContainer>
      <label htmlFor="tags">{label}</label>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <TagsStyle key={index}>
            {tag}{" "}
            <DeleteX
              onClick={() => {
                onDelete(tag);
              }}
            >
              X
            </DeleteX>
          </TagsStyle>
        ))}

        <input
          type="text"
          id="tags"
          name="tags"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag!"
          value={tagInput}
        />
      </TagsWrapper>
    </TagsContainer>
  );
}

export default ProductTags;

const TagsContainer = styled.section`
  display: grid;
  border: 1px green solid;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #51a451;
  border-radius: 10px;
  label {
    font-weight: bold;
  }

  input {
    padding: 0.3rem 0.2rem;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    width: 5rem;
    border: none;
    border-left: 5px solid purple;
    background: #e6e6e6;
    height: 1.6rem;
    border-radius: 5px;
  }
`;

const TagsStyle = styled.span`
  padding: 0.5rem;
  margin: 0.5rem;
  background: purple;
  color: white;
  border-radius: 5px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DeleteX = styled.span`
  background: rgba(255, 255, 255, 0.303);
  padding: 0.2rem 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: red;
  }
`;
