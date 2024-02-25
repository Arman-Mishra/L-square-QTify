import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Body/Section/Section";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { topAlbums, newAlbums, songs, filters } = useOutletContext();

  return (
    <>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      {/* song section */}
      <Section title="Songs" data={songs} filters={filters} type="song" />
    </>
  );
};

export default HomePage;
