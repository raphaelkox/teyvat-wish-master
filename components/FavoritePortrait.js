import Image from 'next/image'

const FavoritePortrait = (props)  => {
    return(
        <div className='m-4 overflow-hidden bg-gray-500'>
          <Image src={'/images/character_portraits/aether.png'} width='360' height='360' layout='responsive' property/>
        </div>
    )
}

export default FavoritePortrait;