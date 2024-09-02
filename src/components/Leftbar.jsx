import React, { useEffect, useState } from "react";
import { eventsdata } from "../dataset/Dataset";

const Leftbar = (props) => {
  const [kitty, setkitty] = useState([]);
  const [piglet, setPiglet] = useState([]);

  const getuniquedata = (data, categeory1) => {
    return data.filter((event) => event.category === categeory1);
  };
  let loader = getuniquedata(eventsdata, kitty.categeory);
  

  useEffect(() => {
    setkitty(props.categeory);
  }, [kitty, props.categeory]);

  useEffect(() => {
    props.onChange(piglet);
  }, [piglet, props.onChange]);

  if (loader.length<1) {
   
    
  }

  return (
    <div className="absolute text-white overflow-y-scroll  h-[100vh] w-[20vw] morf right-0">
    {loader.length<1?<div className="flex h-[100vh] justify-center w-full items-center text-xl">
      <h1>Chose something from <br/>the categeories</h1>
    </div>:null}
      {loader.map((event) => {
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
