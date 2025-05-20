import React from "react";
import Banner from "../components/Banner";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Fade direction="up" triggerOnce cascade damping={2}>
        <div>
          <Banner></Banner>
        </div>
      </Fade>
      <section>
        <Zoom >
          <div className="space-y-4">
            <p className="text-lg">Item 1</p>
            <p className="text-lg">Item 2</p>
            <p className="text-lg">Item 3</p>
          </div>
        </Zoom>
      </section>
    </div>
  );
};

export default Home;
