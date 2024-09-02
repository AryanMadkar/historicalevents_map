import React, { useEffect, useState } from "react";

const Topbar = (props) => {
  const [categeo, setCategeo] = useState("");
  const eventhandler = (e) => {
    setCategeo({ ...categeo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    props.onChange(categeo);
  }, [categeo, props.onChange]);

  return (
    <div className="absolute w-[calc(100%-20vw)] flex p-[0.5rem] text-white items-center justify-between h-[10vh] morf">
      <div>
        <select
          name="categeory"
          onChange={eventhandler}
          value={categeo}
          className="p-[0.5rem] bg-emerald-700 transition-all rounded-2xl"
        >
          <option >Choose Any </option>
          <option value="Medieval">Medieval</option>
          <option value="Modern">Modern</option>
          <option value="Exploration">Exploration</option>
          <option value="Science">Science</option>
          <option value="War">War</option>
          <option value="Sports">Sports</option>
          <option value="Politics">Politics</option>
          <option value="Art">Art</option>
          <option value="Religion">Religion</option>
          <option value="Other">other</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
