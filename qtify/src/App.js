import React from "react";
import Navbar from "./components/NavSection/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
// import Card from "./components/Body/Card/Card";
// import image from "./assets/Rectangle 2139.png";
import Section from "./components/Body/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Card
        data={{
          image: image,
          //follows: "100 follows",
          //title: "New Hindi Songs",
          //likes: 100,
          //slug: "",
          //songs: ["asd", "asd", "fsdgdf", "asdaslkk"],
        }}
        type="song"
      /> */}
      <Section btn_text="Collapse" />
    </>
  );
}

export default App;
