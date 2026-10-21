import React from "react";
import "./gallery.css";

// Each photo opens full size in a new tab, no lightbox JS needed
function Gallery({ photos, className = "" }) {
  return (
    <div className={`photo-grid ${className}`}>
      {photos.map((photo) => (
        <figure key={photo.src} className={`photo-item${photo.wide ? " photo-wide" : ""}`}>
          <a href={photo.src} target="_blank" rel="noopener noreferrer">
            <img src={photo.src} alt={photo.caption || "photo"} loading="lazy" />
          </a>
          {photo.caption && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default Gallery;
