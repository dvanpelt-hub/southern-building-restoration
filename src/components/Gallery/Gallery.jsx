import React, { useState } from "react";
import "./Gallery.css"; // Import the CSS styles for the grid and lightbox

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {/* Image Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            onClick={() => openLightbox(image.full)}
          />
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage} className="lightbox-image" />
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
