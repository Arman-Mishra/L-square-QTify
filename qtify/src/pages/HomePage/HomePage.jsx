import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Body/Section/Section";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { topAlbums, newAlbums } = useOutletContext();
  return (
    <>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      {/* song section */}
    </>
  );
};

export default HomePage;
