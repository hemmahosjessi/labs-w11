import React, { useState, useEffect } from "react";
import ProfileImage from "./components/ProfileImage";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const image = "./profile.png";
  const textColor = { color: "#EBFF00" };
  const name = "Linus Ekenstam";
  const title = 'Get ready for adventure'
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
