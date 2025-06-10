import React, { useState, useEffect, useRef } from "react";
// import { Modal } from "react-bootstrap";
import "../../styles/news.css";

const images = [
  {
    src: "/seithigal/image_1.jpg",
    caption: "Interview 1",
    date: "May 15, 2023"
  },
  { src: "/seithigal/image_2.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_3.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_4.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_5.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_6.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_7.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_8.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_9.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_9.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_10.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_11.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_12.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_13.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_14.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_15.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_16.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_17.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_18.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_19.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_20.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_21.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_22.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_23.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_24.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_25.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_26.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_27.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_28.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_29.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_30.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_31.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_32.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_33.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_34.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_35.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_36.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_37.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_38.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_39.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_40.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_41.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_42.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_42.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_43.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_44.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_45.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_46.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_47.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_48.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_49.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  {
    src: "/seithigal/image_50.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_51.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_52.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_53.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_54.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_55.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_56.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_57.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_58.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_59.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_60.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_61.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_62.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_63.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_64.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_65.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_66.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_67.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_68.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_69.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_70.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_71.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_72.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_73.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_74.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_75.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_76.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_77.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_32.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_78.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_79.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_80.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/image_81.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/image_82.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/image_83.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/image_84.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/image_85.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  },
  { src: "/seithigal/image_86.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/image_87.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/image_88.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/image_89.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/image_90.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  }
];

const News = () => {
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
export default News;
