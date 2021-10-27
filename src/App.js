import React, { useState, useEffect } from "react";
import ProfileImage from "./components/ProfileImage";
import Header from "./components/Header";
import Card from "./components/Card";
import "./index.css";

const App = () => {
  const image = "./profile.png";
  const textColor = { color: "#EBFF00" };
  const name = "Linus Ekenstam";
  const title = 'Get ready for adventure'
  const backgroundColor = { backgroundColor: '#151414ee'}

  const cardTitle = 'The beginning of everything.'
  const date = 'JANUARY 2022'
  const number = '01'
  const cardImage = './magic-pattern.png'


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
      <Card 
        cardImage = {cardImage}
        cardTitle = {cardTitle}
        date = {date}
        number = {number}
      />
    </>
  );
};

export default App;
