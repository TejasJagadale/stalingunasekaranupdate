import React, { useState, useEffect, useRef } from "react";
import "../../styles/interview.css";

const images = [
  { src: "/velinadu/img-1.jpg", caption: "Interview 1" },
  { src: "/velinadu/img-2.jpg", caption: "Interview 2" },
  { src: "/velinadu/img-3.jpg", caption: "Interview 3" },
  { src: "/velinadu/img-4.jpg", caption: "Interview 4" },
  { src: "/velinadu/img-5.jpg", caption: "Interview 5" },
  { src: "/velinadu/img-6.jpg", caption: "Interview 6" },
  { src: "/velinadu/img-7.jpg", caption: "Interview 7" },
  { src: "/velinadu/img-8.jpg", caption: "Interview 8" },
  { src: "/velinadu/img-11.jpg", caption: "Interview 11" },
  { src: "/velinadu/img-12.jpg", caption: "Interview 12" },
  { src: "/velinadu/img-13.jpg", caption: "Interview 13" },
  { src: "/velinadu/img-15.jpg", caption: "Interview 15" },
  { src: "/velinadu/img-16.jpg", caption: "Interview 16" },
  { src: "/velinadu/img-17.jpg", caption: "Interview 17" },
  { src: "/velinadu/img-19.jpg", caption: "Interview 19" },
  { src: "/velinadu/img-20.jpg", caption: "Interview 20" },
  { src: "/velinadu/img-21.jpg", caption: "Interview 21" },
  { src: "/velinadu/img-22.jpg", caption: "Interview 22" },
  { src: "/velinadu/img-23.jpg", caption: "Interview 23" },
  { src: "/velinadu/img-24.jpg", caption: "Interview 24" },
  { src: "/velinadu/img-25.jpg", caption: "Interview 25" }
];

const Velinadu = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      // Scroll to the overlay when an image is selected
      overlayRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  // Close modal when clicking outside image
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("image-overlay")) {
      setSelectedImage(null);
    }
  };
  return (
    <div className={`news-container ${loaded ? "loaded" : ""}`}>
      <h1 className="publication-title">வெளிநாட்டு சந்திப்புகள்</h1>

      <div className="gallery">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            <div className="image-wrapper">
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="overlay"></div>
              <div className="caption">
                {/* <h3>{img.caption}</h3> */}
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Image Overlay */}
      {selectedImage && (
        <div
          className="image-overlay"
          onClick={handleOverlayClick}
          ref={overlayRef}
        >
          <div className="image-modal">
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="image-content">
              <img src={selectedImage.src} alt={selectedImage.caption} />
              <p className="image-caption">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Velinadu;
