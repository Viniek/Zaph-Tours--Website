import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destination";
import Contact_us from "./pages/Contact_us/Contact";
import Trips_type from "./pages/Trips_type/Trips";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destinations/>}/>
          <Route path="/Contact" element={<Contact_us />} />
          <Route path="/Trips" element={<Trips_type />} />         
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
