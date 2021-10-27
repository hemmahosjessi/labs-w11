import React, { useState, useEffect } from "react";
import ProfileImage from "./components/ProfileImage";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const image = "./profile.png";
  const textColor = { color: "yellow" };
  const name = "Foxes";
  const title = 'Get Ready for adventure'
  const backgroundColor = { backgroundColor: '#151414ee'}

  return (
    <>
    <Header 
     title = {title}
     backgroundColor = {backgroundColor}
     background
      />
    <section>
      <ProfileImage image={image} textColor={textColor} name={name} />;
    </section>
    </>
  );
};

export default App;
