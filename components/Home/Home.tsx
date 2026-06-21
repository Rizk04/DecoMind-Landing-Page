import React from "react";
import Hero from "./Hero/Hero";
import Feature from "./Features/FeatureBar";
import FeatureList from "./Features/FeatureList";
import Download from "./DownloadBar/Download";
import FeatureBarProgress from "./Features/FeatureBarProgress";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <section className="h-screen snap-start">
        <Hero />
      </section>

      <section className="h-screen md:snap-start">
        <FeatureBarProgress />
      </section>

      <section className="h-screen md:snap-start">
        <FeatureList />
      </section>

      <section className="h-screen md:snap-start">
        <Feature />
      </section>

      <section className="h-screen md:snap-start">
        <Download />
      </section>
      <section className="md:snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
