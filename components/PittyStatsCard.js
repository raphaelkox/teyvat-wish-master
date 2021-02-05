import PittyStat from '../components/PittyStat'

const PittyStatsCard = (props) => {
    return(
        <div className='mx-4 mb-4 flex flex-col flex-grow bg-gray-800'>
          <PittyStat stars={4} value={props.fourStarPitty} max={10} />
          <PittyStat stars={5} value={props.fiveStarPitty} max={90} />
        </div>
    )
}

export default PittyStatsCard