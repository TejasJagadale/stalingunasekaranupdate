import React, { useState, useEffect, useRef } from "react";
import "../../styles/interview.css";

const images = [
  { src: "/petigal/img-1.jpg", caption: "Interview 1" },
  { src: "/petigal/img-2.jpg", caption: "Interview 2" },
  { src: "/petigal/img-3.jpg", caption: "Interview 3" },
  { src: "/petigal/img-4.jpg", caption: "Interview 4" },
  { src: "/petigal/img-5.jpg", caption: "Interview 5" },
  { src: "/petigal/img-6.jpg", caption: "Interview 6" },
  { src: "/petigal/img-7.jpg", caption: "Interview 7" },
  { src: "/petigal/img-8.jpg", caption: "Interview 8" },
  { src: "/petigal/img-9.jpg", caption: "Interview 9" },
  { src: "/petigal/img-10.jpg", caption: "Interview 10" },
  { src: "/petigal/img-11.jpg", caption: "Interview 11" },
  { src: "/petigal/img-12.jpg", caption: "Interview 12" },
  { src: "/petigal/img-13.jpg", caption: "Interview 13" },
  { src: "/petigal/img-14.jpg", caption: "Interview 14" },
  { src: "/petigal/img-15.jpg", caption: "Interview 15" },
  { src: "/petigal/img-16.jpg", caption: "Interview 16" },
  { src: "/petigal/img-17.jpg", caption: "Interview 17" }
];

const Interview = () => {
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
      <h1 className="publication-title">பேட்டிகள்</h1>

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

export default Interview;
