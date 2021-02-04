import _ from 'lodash'

const PittyStats = (props) => {
    let stars = [];
    _.times(props.stars, () => {
        stars.push(<span >⭐</span>);
      }); 

    return(
        <div className='my-2 bg-gray-700 flex flex-col flex-grow'>
            <div className='flex justify-between bg-gray-600'>
                <div className='-my-0.5 text-2xl'>
                    {stars}
                </div>
                <div className='text-2xl font-medium'>
                    { props.value + '/' + props.max }
                </div>
            </div>   
            <div className='flex-grow bg-gray-600'>
                <div className='my-2 h-3 rounded-xl bg-gray-500'>
                    <div className='w-1/2 h-3 rounded-xl bg-gray-300'></div>
                </div>
            </div>         
        </div>
    )
}

export default PittyStats;