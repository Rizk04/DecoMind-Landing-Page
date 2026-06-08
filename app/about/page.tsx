import ContactUs from '@/components/Home/About/ContactUs'
import Description from '@/components/Home/About/Description'
import MiddleDecription from '@/components/Home/About/MiddleDecription'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='pt-[12vh]'>
      <Description/>
      <MiddleDecription/>
      <ContactUs/>
    </div>
  )
}

export default AboutPage