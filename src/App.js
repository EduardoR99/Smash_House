import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Food from "./components/Food";
import Footer from "./components/Footer";

import Craft1 from './assets/IMG_5708.jpg';
import Craft2 from './assets/IMG_0929.jpg';
import Craft4 from './assets/11.jpg';
import Craft5 from './assets/15.jpg';


function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Food bgImg1={Craft1} bgImg2={Craft2}/>
     <Food bgImg={Craft4}/>
     <Food bgImg={Craft5}/>
     <Footer/>
    </div>
  );
}

export default App;
