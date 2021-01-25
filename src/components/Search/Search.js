import React, { useState } from "react";
import "./Search.css";
import { Search as SearchIcon, Mic as MicIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Search = (props) => {
  const { hideButtons = false, preValue } = props;
  console.log("preValue:" + preValue);
  // const state = {};
  // const [state, dispatch] = useStateValue();
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState(preValue || "");
  const history = useHistory();
  const handleBtnSearch = (e) => {
    e.preventDefault();

    //do something vs input
    searchFunc(input);
  };
  const changeInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
      //do something vs input
      searchFunc(input);
    }
  };
  const searchFunc = (input) => {
    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input || "Khánh Nòi",
    });
    history.push("/search");
  };
  return (
    <>
      <div className="search">
        <div className="search__input">
          <SearchIcon className="search__input__iconSearch" />
          <input
            type="text"
            value={input}
            onChange={changeInput}
            onKeyDown={handleKeyDown}
          />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search__buttons">
            <Button onClick={handleBtnSearch} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeding Lucky</Button>
          </div>
        ) : (
          <div className="search__buttonsHidden">
            <Button onClick={handleBtnSearch} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeding Lucky</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
