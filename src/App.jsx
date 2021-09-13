import React, { useState } from "react";
import Loader from "./Loader";
import { NavBar, NavBar2 } from "./NavBar";
import Userdata from "./Userdata";

const App = () => {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);

  const getData = async () => {
    setloader(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const users = await response.json();
      setData(users.data);
      setloader(false);
    } catch {
      setloader(false);
    }
  };

  if (data.length === 0) {
    return <NavBar getData={getData} />;
  } else {
    return (
      <div>
        <NavBar2 />
        {loader ? <Loader /> : <Userdata data={data} />}
      </div>
    );
  }
};

export default App;