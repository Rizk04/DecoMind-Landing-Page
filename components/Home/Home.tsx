import React from "react";
import Hero from "./Hero/Hero";
import Feature from "./Features/FeatureBar";
import FeatureList from "./Features/FeatureList";
import Download from "./DownloadBar/Download";
import FeatureBarProgress from "./Features/FeatureBarProgress";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <Hero />
      </section>

      <section className="h-screen snap-start">
        <FeatureBarProgress />
      </section>

      <section className="h-screen snap-start">
        <FeatureList />
      </section>

      <section className="h-screen snap-start">
        <Feature />
      </section>

      <section className="h-screen snap-start">
        <Download />
      </section>
    </div>
  );
};

export default Home;