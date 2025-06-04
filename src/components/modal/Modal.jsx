// Modal.jsx
import React, { useEffect } from "react";
import "../../styles/modal.css";

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img 
          src={image.src} 
          alt={image.caption} 
          className="modal-img" 
        />
        <div className="modal-caption">
          <h3>{image.caption}</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;