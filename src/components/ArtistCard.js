import React from "react";

const ArtistCard = () => {
  return (
    <div className="artist-card">
      <img
        src="https://raw.githubusercontent.com/IrvHenri/pic-mrkt-imgs/main/arun-clarke-X82LqpHBA7g-unsplash.jpg"
        alt="person taking photo"
        className="artist-img"
      />
      <div className="artist-info">
        <small>Photographer</small>
        <h3>Robert Smith</h3>
      </div>
    </div>
  );
};

export default ArtistCard;
