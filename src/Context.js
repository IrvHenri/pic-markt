import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  async function getAPI() {
    await fetch(
      `https://raw.githubusercontent.com/IrvHenri/pic-mrkt-imgs/main/images.json`
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos({ data }));
  }
  console.log(allPhotos);
  useEffect(() => {
    getAPI();
  }, []);

  return <Context.Provider value={allPhotos}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
