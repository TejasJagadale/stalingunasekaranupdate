import React, { useState, useEffect, useRef } from "react";
// import { Modal } from "react-bootstrap";
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
