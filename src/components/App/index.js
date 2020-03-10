import React, { useState } from "react";
import css from "./App.module.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import ReactLeafletSearch from "react-leaflet-search";
import L from "leaflet";
import Form from '../Form';

let allowTreeAdd = false;

const dummyData = [
  {
    lat: 52.862,
    lon: -1.904,
    species: "larch",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.62,
    lon: -1.04,
    species: "elm",
    status: "requested",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.2,
    lon: -1.4,
    species: "ash",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.4862,
    lon: -1.8904,
    species: "birch",
    status: "requested",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.862,
    lon: -1.8904,
    species: "larch",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.62,
    lon: -1.8904,
    species: "elm",
    status: "requested",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.2,
    lon: -1.8904,
    species: "ash",
    status: "requested",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.4862,
    lon: -1.8904,
    species: "birch",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.4862,
    lon: -1.904,
    species: "larch",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.4862,
    lon: -1.04,
    species: "elm",
    status: "requested",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  },
  {
    lat: 52.4862,
    lon: -1.4,
    species: "ash",
    status: "planted",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
  }
];

const redTreeMarker = new L.icon({
  iconUrl: require("../../img/icon_red.png"),
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15)
});

const greenTreeMarker = new L.icon({
  iconUrl: require("../../img/icon_green.png"),
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15)
});

function toggleAllowTreeAdd() {
  allowTreeAdd = !allowTreeAdd;
}

function App() {
  const [trees, setTrees] = useState(dummyData);

  function handleClick(e) {
    const { lat, lng } = e.latlng;
    const newTree = {
      lat: lat,
      lon: lng,
      species: "larch",
      status: "planted",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
    };
    allowTreeAdd && setTrees([...trees, newTree]);
  }
  const bhamPosition = [52.4862, -1.8904];
  const map = (
    <Map
      center={bhamPosition}
      zoom={8}
      maxZoom={15}
      minZoom={7}
      onclick={handleClick}
    >
      <ReactLeafletSearch
        position="topleft"
        provider="OpenStreetMap"
        providerOptions={{ region: "gb" }}
        inputPlaceholder="Search by postcode or area name"
        closeResultsOnClick={true}
        showPopup={true}
      />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {trees.map(x => {
        return (
          <Marker
            icon={x.status === "planted" ? greenTreeMarker : redTreeMarker}
            position={[x.lat, x.lon]}
            key={x.status + x.lat + x.lon + x.species}
          >
            <Popup>
              A pretty CSS3 popup {x.species}.<br />
              Easily customizable. <br />
              <img width="100px" src={x.photo} alt="A West Midlands tree." />
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
      <button onClick={toggleAllowTreeAdd}>Add tree</button>
    <Form />
    </div>
  );
}

export default App;
