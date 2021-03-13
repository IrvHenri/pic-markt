import React from "react";
import ArtistCard from "../components/ArtistCard";
import { Link } from "react-router-dom";
const Artists = () => {
  return (
    <div className="artists-page container">
      <h1>Artists</h1>
      <h2>Check out some of our collections!</h2>
      <div className="artists-card-container">
        <Link to="/artists/RobertSmith">
          <ArtistCard />
        </Link>
      </div>
    </div>
  );
};

export default Artists;
