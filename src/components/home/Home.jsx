import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="content">
      <div class="left-section">
        <div class="titlename">
          <h1>த. ஸ்டாலின் குணசேகரன்</h1>
          <h3>பேச்சாளர் | எழுத்தாளர் | வழக்கறிஞர்</h3>
        </div>

        <div class="mainiconclass">
          <div class="mainicon">
            <Link class="icon1" to="/publication">
              <div class="iconcolor1">
                <img src="./images/books.png" alt="" class="iconimage" />
              </div>
              <h2>30+</h2>
              <h3 className="subtitles">படைப்புகள்</h3>
            </Link>

            <Link class="icon1" to="/about">
              <div class="iconcolor1">
                <img src="./images/trophy.png" alt="" class="iconimage " />
              </div>
              <h2>50+</h2>
              <h3 className="subtitles">விருதுகள்</h3>
            </Link>
          </div>
          <div class="mainicon">
            <Link class="icon1" to="/essay">
              <div class="iconcolor1">
                <img src="./images/script.png" alt="" class="iconimage " />
              </div>
              <h2>20+</h2>
              <h3 className="subtitles">கட்டுரைகள்</h3>
            </Link>
            <Link class="icon1" to="/about">
              <div class="iconcolor1">
                <img src="./images/article.png" alt="" class="iconimage " />
              </div>
              <h2>50+</h2>
              <h3 className="subtitles">அங்கீகாரங்கள்</h3>
            </Link>
          </div>
        </div>
      </div>
      <img src="./images/img-7.jpg" alt="" class="homeimage" />
      <img src="./images/profile.jpg" alt="" class="homeimage1" />
    </div>
  );
};

export default Home;
