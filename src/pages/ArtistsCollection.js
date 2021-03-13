import React, { useContext } from "react";
import Image from "../components/Image";
import ArtistCollectionCard from "../components/ArtistCollectionCard";
import { Context } from "../Context";
import { getClass } from "../utils/index";
import { useParams } from "react-router-dom";

function ArtistsCollection() {
  const { allPhotos } = useContext(Context);
  const { artistName } = useParams();

  const photos = allPhotos.map((img, i) => {
    if (img.artist === artistName) {
      return <Image key={img.id} img={img} className={getClass(i)} />;
    } else {
      return null;
    }
  });
  return (
    <div className="artist-collection container">
      <ArtistCollectionCard />
      <main className="photos">{photos}</main>
    </div>
  );
}

export default ArtistsCollection;
