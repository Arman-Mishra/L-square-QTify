import React, { useState, useEffect } from "react";
import Navbar from "./components/NavSection/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchFilters,
} from "./api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    generateAndStoreData("topAlbums", fetchTopAlbums);
    generateAndStoreData("newAlbums", fetchNewAlbums);
    generateAndStoreData("songs", fetchSongs);
    generateAndStoreData("filters", fetchFilters);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], filters = [] } = data;

  const generateAndStoreData = (key, source) => {
    source().then((data) =>
      setData((prevState) => {
        return { ...prevState, [key]: data };
      })
    );
  };

  return (
    <>
      <Navbar />
      <StyledEngineProvider injectFirst>
        <Outlet context={{ topAlbums, newAlbums, songs, filters }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
