import React from 'react'
import Hero from '../components/Hero'
import Gta6 from '../components/Gta6'
import Gta5Video from '../components/Gta5Video'
import RedDead from '../components/RedDead'
import GameLibrary from '../components/GameLibrary'
import Propaganda from '../components/Propaganda'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Gta6/>
      <Gta5Video/>
      <RedDead/>
      <GameLibrary/>
      <Propaganda/>
    </div>
  )
}

export default Home
