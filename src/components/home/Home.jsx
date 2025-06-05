import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

// Import your images (adjust paths as needed)
import img1 from "../../homeslide/img-7.jpg";
import img2 from "../../homeslide/img-1.jpg";
import img3 from "../../homeslide/img-2.jpg";
import img4 from "../../homeslide/img-3.jpg";
import img5 from "../../homeslide/img-5.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="content">
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

            <Link class="icon1" to="/about#tab3">
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

      <div className="carousel-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`homeimage ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <img src="./images/profile.jpg" alt="" class="homeimage1" />
    </div>
  );
};

export default Home;
