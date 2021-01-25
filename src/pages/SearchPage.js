import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import {
  Search as SearchIcon,
  Description as DescriptionIcon,
  Image as ImageIcon,
  LocalOffer as LocalOfferIcon,
  Room as RoomIcon,
  MoreVert as MoreVertIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@material-ui/icons";
import googleImg from "./../assets/images/googlelogo_color_92x30dp_khanh_noi.png";

import response from "./../response";
import Search from "../components/Search/Search";

const SearchPage = () => {
  const [state, dispatch] = useStateValue();

  //EX1 " Context
  // const { term } = state;

  //EX2: Params URL
  // const { term } = useParams();
  // console.log("URL: " + term);

  //EX3: Query Parameters
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  // console.log("parsed: ");
  // console.log(parsed.q);
  const { q } = parsed;
  const term = q;
  // console.log("term:  + term);
  // const { data } = useGoogleSearch(term);
  // console.log("Data: ");
  // console.log(data);

  //test Mock API CALL
  const data = response;
  //end test

  // google api
  // http://developers.google.com/custom-search/v1/using_rest

  //http://cse.google.com/cse/create/new

  return (
    <>
      <div className="searchPage">
        {/* <h1>This is Search Page</h1> */}
        <div className="searchPage__header">
          <Link to="/">
            <img src={googleImg} alt="logo" className="searchPage__logo" />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons preValue={term} />
            <div className="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                  <SearchIcon className="searchPage__optionIcon" />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                  <DescriptionIcon className="searchPage__optionIcon" />
                  <Link to="/all">News</Link>
                </div>
                <div className="searchPage__option">
                  <ImageIcon className="searchPage__optionIcon" />
                  <Link to="/all">Images</Link>
                </div>
                <div className="searchPage__option">
                  <LocalOfferIcon className="searchPage__optionIcon" />
                  <Link to="/all">Shopping</Link>
                </div>
                <div className="searchPage__option">
                  <RoomIcon className="searchPage__optionIcon" />
                  <Link to="/all">Maps</Link>
                </div>
                <div className="searchPage__option">
                  <MoreVertIcon className="searchPage__optionIcon" />
                  <Link to="/all">More</Link>
                </div>
              </div>
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to="/all">Settings</Link>
                </div>
                <div className="searchPage__option">
                  <Link to="/all">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {true || term ? (
          <div className="searchPage__results">
            <p className="searchPage__resultsCount">
              About {data?.searchInformation?.totalResults} results (
              {data?.searchInformation?.formattedSearchTime} seconds) for "
              {term}"
            </p>
            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a
                  href={item?.link}
                  className="searchPage__resultLink"
                  target="_blank"
                >
                  {item?.displayLink} <ArrowDropDownIcon />
                </a>
                <a
                  className="searchPage__resultTitle"
                  href={item?.link}
                  target="_blank"
                >
                  <h3>{item?.title}</h3>
                </a>
                <div className="searchPage__resultDescription">
                  {item?.pagemap?.cse_image?.length > 0 &&
                  item?.pagemap?.cse_image[0]?.src ? (
                    <img
                      src={item?.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="searchPage__resultImage"
                    />
                  ) : (
                    ""
                  )}

                  <p className="searchPage__resultSnippet">{item?.snippet}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="searchPage__results">Not</div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
