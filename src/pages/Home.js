import React from "react";
import "./Home.css";
import { Apps as AppsIcon } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./../components/Search/Search";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <h1>This IS hOME PAGE</h1> */}
        <div className="home__header">
          <div className="home__headerLeft">
            {/* link1 */}
            <Link to="about">About</Link>
            {/* link2 */}
            <Link to="store">Store</Link>
          </div>
          <div className="home__headerRight">
            {/* link3 */}
            <Link to="gmail">Gmail</Link>
            {/* link4 */}
            <Link to="images">Images</Link>
            {/* icon */}
            <AppsIcon />
            {/* avatar */}
            <Avatar />
          </div>
        </div>
        <div className="home__body">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Fake by Khánh Nòi"
          />

          <div className="home__inputContainer">
            <Search hideButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
