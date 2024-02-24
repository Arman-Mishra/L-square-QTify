import axios from "axios";

export const BASE_URL = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
  const url = BASE_URL + "albums/top";
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewAlbums = async () => {
  const url = BASE_URL + "albums/new";
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchSongs = async () => {
  const url = BASE_URL + "songs";
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFilters = async () => {
  const url = BASE_URL + "genres";
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};
