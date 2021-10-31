import React from "react";

const SearchBar = ({ primaryColor, secondaryColor }) => {
  console.log(primaryColor);

  return (
    <form
      style={{
        background: `${primaryColor}`,
        placeholder: `${secondaryColor}`,
      }}
      className="search-bar-container"
    >
      <span
        style={{
          color: `${secondaryColor}`,
          fontSize: "18px",
          padding: "10px",
        }}
        className="fa fa-search"
      ></span>
      <input
        className="input-field"
        type="text"
        placeholder="type something.."
        style={{
          background: `${primaryColor}`,
        }}
      />
      <button
        className="btn"
        type="submit"
        style={{
          background: `${secondaryColor}`,
          color: `${primaryColor}`,
        }}
      >
        find
      </button>
    </form>
  );
};

export default SearchBar;