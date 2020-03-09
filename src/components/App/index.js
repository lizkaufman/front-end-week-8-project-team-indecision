import React from "react";
import css from "./App.module.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const dummyData = [
  { lat: 52.4862, lon: -1.8904, species: "birch", status: "requested" },
  { lat: 52.862, lon: -1.904, species: "larch", status: "planted" },
  { lat: 52.62, lon: -1.04, species: "elm", status: "requested" },
  { lat: 52.2, lon: -1.4, species: "ash", status: "planted" },
  { lat: 52.4862, lon: -1.8904, species: "birch", status: "requested" },
  { lat: 52.862, lon: -1.8904, species: "larch", status: "planted" },
  { lat: 52.62, lon: -1.8904, species: "elm", status: "requested" },
  { lat: 52.2, lon: -1.8904, species: "ash", status: "requested" },
  { lat: 52.4862, lon: -1.8904, species: "birch", status: "planted" },
  { lat: 52.4862, lon: -1.904, species: "larch", status: "planted" },
  { lat: 52.4862, lon: -1.04, species: "elm", status: "requested" },
  { lat: 52.4862, lon: -1.4, species: "ash", status: "planted" }
];

const redTreeMarker = new L.icon({
  iconUrl: require("../../img/icon_red.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15)
});
const greenTreeMarker = new L.icon({
  iconUrl: require("../../img/icon_green.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15)
});

function App() {
  const bhamPosition = [52.4862, -1.8904];
  const map = (
    <Map center={bhamPosition} zoom={8} maxZoom={15} minZoom={7}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {dummyData.map(x => {
        return (
          <Marker
            icon={x.status === "planted" ? greenTreeMarker : redTreeMarker}
            position={[x.lat, x.lon]}
          >
            <Popup>
              A pretty CSS3 popup {x.species}.<br />
              Easily customizable.
            </Popup>
          </Marker>
        );
      })}
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
