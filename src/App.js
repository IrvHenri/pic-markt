import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Artists from "./pages/Artists";
import ArtistsCollection from "./pages/ArtistsCollection";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/artists">
          <Artists />
        </Route>
        <Route path="/artists/:artistName">
          <ArtistsCollection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
