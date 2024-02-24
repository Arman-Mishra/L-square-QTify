import React, { useState, useEffect } from "react";
import Navbar from "./components/NavSection/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters,
} from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateAndStoreData = (key, source) => {
    source().then((data) =>
      setData((prevState) => {
        return { ...prevState, [key]: data };
      })
    );
  };

  useEffect(() => {
    generateAndStoreData("topAlbums", fetchTopAlbums);
    generateAndStoreData("newAlbums", fetchNewAlbums);
    generateAndStoreData("songs", fetchSongs);
    generateAndStoreData("filters", fetchFilters);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], filters = [] } = data;

  return (
    <>
      <Navbar />
      <Outlet context={{ topAlbums, newAlbums, songs, filters }} />
    </>
  );
}

export default App;
