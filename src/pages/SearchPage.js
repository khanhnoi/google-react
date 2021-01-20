import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";

const SearchPage = () => {
  const [state, dispatch] = useStateValue();
  const { term } = state;
  return (
    <>
      <div className="searchPage">
        {/* <h1>This is Search Page</h1> */}
        <div className="searchPage__header">{term}</div>
        <div className="searchPage__results"></div>
      </div>
    </>
  );
};

export default SearchPage;
