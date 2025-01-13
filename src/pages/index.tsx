import React from 'react'
import SectionOne from '../component/home/a-call.tsx'
import OurClient from '../component/home/our-clients.tsx'
import SuccessWay from '../component/home/success.way.tsx'
import B2B from '../component/home/b2b-b2c.tsx'
import Articles from '../component/home/articles.tsx'

const Home = () => {
  return (
    <>
    <SectionOne />
    <OurClient />
    <SuccessWay />
    <B2B />
    <Articles />
    </>
  )
}

export default Home