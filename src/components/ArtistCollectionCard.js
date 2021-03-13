import React from "react";

const ArtistCollectionCard = () => {
  return (
    <div className="artist-collection-card">
      <img
        src="https://raw.githubusercontent.com/IrvHenri/pic-mrkt-imgs/main/arun-clarke-X82LqpHBA7g-unsplash.jpg"
        alt="person taking photo"
        className="artist-collection-img"
      />
      <footer className="artist-collection-card-info">
        <small>Collection</small>
        <h3>Robert Smith</h3>
      </footer>
    </div>
  );
};

export default ArtistCollectionCard;
