import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/homepage/Footer";
import Home from "./components/homepage/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/homepage/Portfolio";
import Contact from "./components/homepage/Contact";
import OurTeam from "./components/homepage/OurTeam";
import Services from "./components/homepage/Services";
import MobileNavbar from "./components/MobileNavbar";
function App() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={OurTeam} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
