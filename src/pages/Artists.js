import React from "react";
import ArtistCard from "../components/ArtistCard";
import { Link } from "react-router-dom";
const Artists = () => {
  return (
    <div className="artists-page container">
      <h1>Artists</h1>
      <h2>Check out some of our artists' collections!</h2>
      <Link to="/artists/RobertSmith">
        <ArtistCard />
      </Link>
    </div>
  );
};

export default Artists;
