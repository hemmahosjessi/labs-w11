import React from "react";
import ProfileImage from "./components/ProfileImage";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
// import "./App.css";
import "./index.css";

const App = () => {
  const image = "./profile.png";
  const textColor = { color: "#EBFF00" };
  const name = "Linus Ekenstam";
  const title = "Get ready for adventure";
  const backgroundColor = { backgroundColor: "#151414ee" };

  const cardTitle = "The beginning of everything.";
  const date = "JANUARY 2022";
  const number = "01";
  const cardImage = "./magic-pattern.png";

  const primaryColor = "#F8E1ED";
  const secondaryColor = "#B5A2AC";

  return (
    <section>
      <Header title={title} backgroundColor={backgroundColor} background />
      <section>
        <ProfileImage image={image} textColor={textColor} name={name} />;
      </section>
      <Card
        cardImage={cardImage}
        cardTitle={cardTitle}
        date={date}
        number={number}
      />
      <SearchBar primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </section>
  );
};

export default App;