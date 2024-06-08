import React from "react";
import Destination from "./pages/Destinations/Destination";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Trips from "./pages/Trips/Trips";
import Contact from "./pages/Contact_us/Contact";

import Home from "./pages/Home/Home";
import Header from "./pages/Home/Header";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Destination" element={<Destination/>}/>
          <Route path="/Trips" element={<Trips/>} />
          <Route path="/Contact" element ={<Contact/>} />
        </Routes>

      </BrowserRouter>
      
      
    </>
  )
};

export default App;
