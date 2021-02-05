import _ from 'lodash'
import Progressbar from './Progressbar'

const PittyStat = (props) => {
    let stars = []
    _.times(props.stars, (x) => {
        stars.push(<span key={x}>⭐</span>)
      })

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
                <Progressbar value={ props.value } max={ props.max }/>
            </div>         
        </div>
    )
}

export default PittyStat;