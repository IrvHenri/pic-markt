import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, SetCartItems] = useState([]);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    SetCartItems((prevCartItems) => [...prevCartItems, newItem]);
  }

  console.log(cartItems);

  const url =
    "https://raw.githubusercontent.com/IrvHenri/pic-mrkt-imgs/main/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
