import React from "react";
import "./Home.css";
import { Apps as AppsIcon } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./../components/Search/Search";
import adminImg from "./../assets/admin/khanh-noi.jpg";
import googleImg from "./../assets/images/googlelogo_color_92x30dp_khanh_noi.png";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <h1>This IS hOME PAGE</h1> */}
        <div className="home__header">
          <div className="home__headerLeft">
            {/* link1 */}
            <Link to="/">About</Link>
            {/* <a
              href="http://khanhnoi.mobie.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a> */}
            {/* link2 */}
            <Link to="/">Store</Link>
          </div>
          <div className="home__headerRight">
            {/* link3 */}
            <Link to="/">Gmail</Link>
            {/* link4 */}
            <Link to="/">Images</Link>
            {/* icon */}
            <AppsIcon className="home__headerIcon" />
            {/* avatar */}
            <a
              href="http://khanhnoi.mobie.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar alt="Khánh Nòi" src={adminImg} />
            </a>
          </div>
        </div>
        <div className="home__body">
          <img src={googleImg} alt="Google Fake by Khánh Nòi" />

          <div className="home__inputContainer">
            <Search hideButtons={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
