import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData } from "./api";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import * as api from "./api/index.js";

// const getData1 = async () => {
//   const map = await api.getMapData();
//   const allData = await api.getAllData();

//   console.log(map);
//   console.log(allData);

//   const itemId = "67"; // 67 is the id for tragic echo armour in names.json

//   // from names.json
//   const itemName = map.data.Armours[itemId];

//   // from data..json
//   const tragicEcho = allData.data.armours[itemName];

//   // prints: Upon your first death, become a shadow clone that deals 100% increased damage for 15 seconds.
//   console.log(tragicEcho.unique_effects[0].description);
// };

// getData1();

//decode url to ids using hashids
// import Hashids from "hashids";

// // instantiate the Hashids parser with the salt "spicy"
// const hashids = new Hashids("spicy");

// // next decode the build
// let build = hashids.decode(
//   "YwfzTbbSgCvmIb6sRcnuKTefPrcJCaxSyrf0CxWhe4T0Cw2H3whxCxXs8CM7CP"
// );

// console.log(build);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
