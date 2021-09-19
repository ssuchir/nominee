import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import React, { useState, useEffect } from "react";
import { ballotData } from "./Components/ballotData";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(ballotData);
    console.log("data", data);
  }, [data]);
  return (
    <div className="App">
      <Ballot data={data} />
    </div>
  );
}

export default App;
