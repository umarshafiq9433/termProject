import React, { Fragment } from "react";
import Contact from "./Contact";
import GetStarted from "./GetStarted";
import Intro from "./Intro";
import OurTeam from "./OurTeam";
import Planning from "./planning";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Services from "./Services";
import Skills from "./Skills";
function Home() {
  return (
    <Fragment>
      <Intro />
      <Services />
      <Planning />
      <GetStarted />
      <Portfolio />
      <OurTeam />
      <Skills />
      <Project />
      <Contact />
    </Fragment>
  );
}

export default Home;
