import FavoritePortrait from '../components/FavoritePortrait';
import Layout from '../components/Layout'
import PittyStats from '../components/PittyStats';

const Stats = () => {
  return (
    <Layout nav='stats'>
        <FavoritePortrait />
        <div className='mx-4 mt-1 mb-4 flex flex-col flex-grow bg-gray-800'>
          <PittyStats stars={4} value={5} max={10} />
          <PittyStats stars={5} value={90} max={90}/>
        </div>
    </Layout>
  )
}

export default Stats;
