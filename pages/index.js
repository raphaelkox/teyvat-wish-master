import { useState } from 'react'
import Layout from '../components/Layout'
import FavoritePortrait from '../components/FavoritePortrait'
import PittyStatsCard from '../components/PittyStatsCard'

const Stats = () => {
  const [fourStarPitty, setFourStarPitty] = useState(0)
  const [fiveStarPitty, setFiveStarPitty] = useState(0)

  return (
    <Layout nav='stats'>
        <FavoritePortrait circle='true'/>
        <PittyStatsCard fourStarPitty={fourStarPitty} fiveStarPitty={fiveStarPitty}/>
    </Layout>
  )
}

export default Stats
