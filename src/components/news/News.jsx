import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import "../../styles/news.css";

const images = [
  {
    src: "/seithigal/img-1 (1).jpg",
    caption: "Interview 1",
    date: "May 15, 2023"
  },
  { src: "/seithigal/img-2.jpg", caption: "Interview 2", date: "June 2, 2023" },
  {
    src: "/seithigal/img-3.jpg",
    caption: "Interview 3",
    date: "July 10, 2023"
  },
  {
    src: "/seithigal/img-4.jpg",
    caption: "Interview 4",
    date: "August 5, 2023"
  },
  {
    src: "/seithigal/img-5.jpg",
    caption: "Interview 5",
    date: "September 18, 2023"
  },
  {
    src: "/seithigal/img-6.jpg",
    caption: "Interview 6",
    date: "October 22, 2023"
  },
  {
    src: "/seithigal/img-7.jpg",
    caption: "Interview 7",
    date: "November 30, 2023"
  },
  {
    src: "/seithigal/img-8.jpg",
    caption: "Interview 8",
    date: "December 12, 2023"
  },
  {
    src: "/seithigal/img-11.jpg",
    caption: "Interview 11",
    date: "January 5, 2024"
  },
  {
    src: "/seithigal/img-12.jpg",
    caption: "Interview 12",
    date: "February 14, 2024"
  },
  {
    src: "/seithigal/img-13.jpg",
    caption: "Interview 13",
    date: "March 8, 2024"
  }
];

const News = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const galleryRef = useRef(null);

  useEffect(() => {
    setLoaded(true);

    // Intersection Observer for lazy loading and scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) =>
          img.caption.toLowerCase().includes(activeFilter)
        );

  return (
    <section className="news-section">
      <div className={`news-container ${loaded ? "loaded" : ""}`}>
        {/* <div className="news-header">
          <h1 className="news-title">
            <span>Media Gallery</span>
            <span className="title-decoration"></span>
          </h1>
          <p className="news-subtitle">Explore our collection of exclusive interviews and media coverage</p>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === "all" ? 'active' : ''}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === "interview" ? 'active' : ''}`}
              onClick={() => setActiveFilter("interview")}
            >
              Interviews
            </button>
          </div>
        </div> */}

        <div className="gallery" ref={galleryRef}>
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="image-wrapper">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="overlay"></div>
                <div className="caption">
                  <div className="caption-content">
                    {/* <span className="date-badge">{img.date}</span> */}
                    {/* <h3>{img.caption}</h3> */}
                    <button className="view-btn">
                      <span>View Details</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        <Modal
          show={selectedImage !== null}
          onHide={() => setSelectedImage(null)}
          size="xl"
          centered
          className="gallery-modal"
          backdropClassName="modal-backdrop"
          enforceFocus={true}
          restoreFocus={true}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton className="modal-header">
            <Modal.Title className="modal-title">
              {selectedImage?.caption}
              <span className="modal-subtitle">{selectedImage?.date}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <button
              className="close-btn1"
              onClick={() => setSelectedImage(null)}
            >
              X
            </button>
            {selectedImage && (
              <div className="modal-image-container">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="modal-image"
                />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <button className="download-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default News;
