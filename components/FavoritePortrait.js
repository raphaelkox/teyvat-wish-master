import Image from 'next/image'

const FavoritePortrait = (props)  => {
    return(
        <div className={'m-4 overflow-hidden bg-gray-700 ' + (props.circle === 'true' ? 'rounded-full' : 'rounded-xl')}>
          <Image src={'/images/character_portraits/aether.png'} width='360' height='360' layout='responsive' priority/>
        </div>
    )
}

export default FavoritePortrait