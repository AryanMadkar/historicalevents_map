import { useEffect, useState } from "react";

import "./App.css";
import Maps from "./components/Maps";
import Leftbar from "./components/Leftbar";
import Topbar from "./components/Topbar";

function App() {
  const [newcat, setNewcat] = useState("");
  const [location, setLocation] = useState([]);
  const newcatdata = (categeo) => {
    setNewcat(categeo);
    return categeo;
  };

  const newlocation = (piglet) => {
    setLocation(piglet);
  };

  if (!Maps) {
    return <div className="loading text-black">Loading...</div>;
  }
  return (
    <div className="relative flex h-[100vh] w-[100vw] main1">
      <Topbar onChange={newcatdata} />
      <Maps piglet={location}/>
      <Leftbar onChange={newlocation} categeory={newcat} />
    </div>
  );
}

export default App;
