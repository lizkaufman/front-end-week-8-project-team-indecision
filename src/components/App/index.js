import React, { useState } from "react";
import css from "./App.module.css";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import ReactLeafletSearch from "react-leaflet-search";
import L from "leaflet";
import Form from "../Form";
import {
  TwitterTimelineEmbed,
  TwitterHashtagButton
} from "react-twitter-embed";
import bhamPoly from "../../const_wgs84";

// Set global vars
let allowTreeAdd = false;
const bhamPosition = [52.4862, -1.8904];

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

function getMyGeolocation() {
  let myLat, myLon;
  function geoSuccess(pos) {
    myLat = pos.coords.latitude;
    myLon = pos.coords.longitude;
    console.log("these are the coords: ", myLat, myLon);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess);
  }
  // return { myLat, myLon };
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
      <GeoJSON
        data={bhamPoly}
        style={{ color: "darkgreen", fillColor: "lightgreen", weight: 1 }}
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
      <header>West Midlands Combined Authority Virtual Forest</header>
      <div className={css.mapStyle}>
        {map}
        <button className={css.addTreeButton} onClick={toggleAllowTreeAdd}>
          Add tree
        </button>
        <button className={css.addTreeHereButton} onClick={getMyGeolocation}>
          Add a tree at my current location
        </button>
      </div>
      <div className={css.treeEntryForm}>
        <Form />
      </div>
      <div className={css.twitterFeed}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="WestMids_CA"
          options={{ width: "600px", height: "900px" }}
        />
      </div>
      <div className={css.twitterHashTagButton}>
        <TwitterHashtagButton tag={"NeedsATree"} />
      </div>
      <footer>
        <a href="https://www.wmca.org.uk/careers?_ga=2.233332958.1505638702.1583852010-1790124967.1583750647">
          Jobs
        </a>
        <a href="https://www.wmca.org.uk/policies?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Policies
        </a>
        <a href="https://www.wmca.org.uk/documents?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Documents
        </a>
        <a href="https://governance.wmca.org.uk/?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Committee meetings
        </a>
        <a href="https://www.wmca.org.uk/contact-us?_ga=2.261120205.1505638702.1583852010-1790124967.1583750647">
          Contact us
        </a>
        <a href="https://www.wmca.org.uk/freedom-of-information?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Freedom of information
        </a>
        <a href="https://www.wmca.org.uk/procurement?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Procurement
        </a>
        <a href="https://www.wmca.org.uk/media-assets?_ga=2.266470478.1505638702.1583852010-1790124967.1583750647">
          Media assets
        </a>
        <p>© 2020 West Midlands Combined Authority and School of Code</p>
      </footer>
    </div>
  );
}

export default App;
