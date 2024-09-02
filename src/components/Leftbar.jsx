import React, { useEffect, useState } from "react";
import { eventsdata } from "../dataset/Dataset";

const Leftbar = (props) => {
  const [piglet, setPiglet] = useState([]);
  // const [realdor, setRealdor] = useState([]);
  // if (newcat !== undefined) {
  //   const { categeory } = newcat;
  //   const getuniquedata = (data, category) => {
  //     return data.filter((event) => event.category === category);
  //   };
  //   setRealdor(getuniquedata(eventsdata, categeory));
  // }

  useEffect(() => {
    props.onChange(piglet);
  }, [piglet, props.onChange]);

  return (
    <div className="absolute text-white overflow-y-scroll  h-[100vh] w-[20vw] morf right-0">
      {eventsdata.map((event) => {
        return (
          <div
            key={event.id}
            onClick={() => {
              setPiglet(event.position);
            }}
            className="p-4 mx-2 rounded-2xl cursor-pointer border my-4 w-[90%] border-gray-200 hover:border-gray-400 hover:scale-105 transition-all hover:bg-black scroll-smooth "
          >
            <h2>{event.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Leftbar;
