import Main from "./components/Main.jsx";

import "./app.css";
import Navbar from "./components/Navbar.jsx";

import { fetchData } from "./util/connect.js";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      setData(data);
      setGroupData(data);
    };
    fetchDataAsync();
    return () => {
      setData([]);
      setGroupData([]); // Clear data on unmount
      console.log("Data cleared on unmount");
    };
  }, []);

  function getGroupData(group) {
    setGroupData(data.filter((item) => item.group === group));
  }

  function getGroup(data) {
    // select group form data
    const group = data.map((item) => item.group);
    return [...new Set(group)];
  }

  return (
    <>
      <Navbar groups={getGroup(data)} onGroupSelect={getGroupData} />
      <Main groupData={groupData} />
    </>
  );
}

export default App;
