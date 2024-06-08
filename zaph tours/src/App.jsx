import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Homehome/Home";
import Destinations from "./pages/Destinations/Destination";
import Contact_us from "./pages/Contact_us/Contact";
import Trips_type from "./pages/Trips_type/Trips";
import Header from "./pages/Homehome/Header";
import Footer from "./pages/Homehome/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destinations/>}/>
          <Route path="/Contact" element={<Contact_us />} />
          <Route path="/Trips" element={<Trips_type />} />         
        </Routes>
      </BrowserRouter>
      
          </>
  );
}

export default App;
