import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { eventsdata } from "../dataset/Dataset";
import anchorimage from "/anchor.png";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { DefaultContext } from "react-icons/lib";

const delfualtposition = [20.5937, 78.9629];

const Maps = ({ piglet }) => {
  const [activecitycordinates, setactivecitycordinates] = useState(null);
  let newlock = piglet;
  const repeater = () => {
    if (newlock.length === 0) {
      newlock.push(20.5937);
      newlock.push(78.9629);
    }
  };
  useEffect(() => {
    repeater();
  }, [piglet]);

  function FlytoActualCity({ activecitycordinates }) {
    const map = useMap();
    useEffect(() => {
      if (activecitycordinates) {
        const zoomlev = 13;
        const flytoOptions = {
          duration: 1.5,
        };
        map.flyTo(
          [activecitycordinates[0], activecitycordinates[1]],
          zoomlev,
          flytoOptions
        );
      }
    }, [activecitycordinates, map]);
    return null;
  }
  const [favor, setfavor] = useState(false);
  const [favourites, setfavourites] = useState(() => {
    const savedfav = localStorage.getItem("favourites");
    return savedfav ? JSON.parse(savedfav) : [];
  });

  const icone = new Icon({
    iconUrl: anchorimage,
    iconSize: [35, 40],
    iconAnchor: [12, 40],
  });

  return (
    <div className="h-[85vh] absolute bottom-5 left-10 w-[75vw]">
      <MapContainer
        className="h-full w-full"
        center={delfualtposition}
        zoom={4}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {eventsdata.map((event) => {
          return (
            <Marker
              key={event.id}
              position={[event.position[0], event.position[1]]}
              icon={icone}
              className="transition-all"
            >
              <Popup>
                <div className="flex transition-all bg-black text-white rounded-2xl p-[0.8rem] flex-col ">
                  <h3 className="text-2xl">{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="w-full items-center flex flex-row justify-between mx-2">
                    <p>{event.date}</p>
                    <button onClick={setfavor} className="">
                      {!favor ? (
                        <CiStar className="text-[1.5rem] text-white hover:text-[#FFD700] " />
                      ) : (
                        <FaStar className="text-[1.5rem] hover:text-white font-bold text-[#FFD700]" />
                      )}
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <FlytoActualCity
          activecitycordinates={newlock.length<1 ? [20.5937, 78.9629] : newlock}
        />
      </MapContainer>
    </div>
  );
};

export default Maps;
