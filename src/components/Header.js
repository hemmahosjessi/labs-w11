import React from "react";

const Header = ({ title, backgroundColor }) => {
  return (
    <header style={backgroundColor} className="header">
      <div className="nav-bar">
        <a href="">about</a>
        <a href="">tips</a>
        <a href="">pricing</a>
        <a href="">contact</a>
      </div>
      <h1>{title}</h1>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    </header>
  );
};

export default Header;