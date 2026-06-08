import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/FeatureBar'
import FeatureList from './Features/FeatureList'
import Download from './DownloadBar/Download'
import FeatureBarProgress from './Features/FeatureBarProgress'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <FeatureBarProgress/>
        <FeatureList/>
        <Feature/>
        <Download/>
    </div>
  )
}

export default Home