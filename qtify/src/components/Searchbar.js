import React from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  return (
    <div className="Div">
      <input
        className="Searchbar"
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search an album of your choice"
      />
      <SearchIcon className="input_button" sx={{ height: "100%" }} />
    </div>
  );
}
