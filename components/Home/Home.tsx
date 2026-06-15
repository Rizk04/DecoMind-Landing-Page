import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/FeatureBar'
import FeatureList from './Features/FeatureList'
import Download from './DownloadBar/Download'
import FeatureBarProgress from './Features/FeatureBarProgress'

const Home = () => {
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory'>
      <section className='snap-start pt-[12vh]'>
        <Hero />
      </section>
      <section className='snap-start pt-[12vh]'>
        <FeatureBarProgress />
      </section>
      <section className='snap-start'>
        <FeatureList />
      </section>
      <section className='snap-start pb-[12vh]'>
        <Feature />
      </section>
      <section className='snap-start'>
        <Download />
      </section>
    </div>
  )
}

export default Home