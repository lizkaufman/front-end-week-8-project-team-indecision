import React from "react";
import css from "./App.module.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function App() {
  const bhamPosition = [52.4862, -1.8904];
  const map = (
    <Map center={bhamPosition} zoom={8}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
  return (
    <div className={css.container}>
      {map}
      <h1>Happy mapping!</h1>
    </div>
  );
}

export default App;
