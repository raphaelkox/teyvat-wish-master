import {useContext} from 'react'
import MyContext from '../MyContext'

const WishInput = (props) => {
    const {setWishType, setWishItemIndex} = useContext(MyContext)

    const OnWishTypeChange = (e) => {
        setWishType(props.wishInputIndex, e.target.value)
    }

    const OnWishItemIndexChange = (e) => {
        setWishItemIndex(props.wishInputIndex, e.target.value)
    }

    return(
        <div className='mb-2 p-1 flex flex-col rounded-xl bg-gray-700'>
            <div className='space-x-2 text-white' value={props.wishType} onChange={OnWishTypeChange}>
                {
                    (props.wishType === 'character')
                    ?   (
                            <>
                                <input type='radio' value='character' name={'wishType' + props.wishInputIndex} defaultChecked/> Character
                                <input type='radio' value='weapon' name={'wishType' + props.wishInputIndex} /> Weapon
                            </>
                        )
                    :   (
                            <>
                                <input type='radio' value='character' name={'wishType' + props.wishInputIndex} /> Character
                                <input type='radio' value='weapon' name={'wishType' + props.wishInputIndex} defaultChecked/> Weapon
                            </>
                        )
                }
            </div>
            <select className='px-2 my-1 outline-none overflow-hidden rounded-xl' value={props.wishItemIndex} onChange={OnWishItemIndexChange}>
                {
                    (props.wishType === 'character')
                    ?   props.characterData.map((character, index) =>{
                            return(<option key={character._id} value={index}>{character.name}</option>)
                            }
                        )
                    :   props.weaponData.map((weapon, index) =>{
                            return(<option key={weapon._id} value={index}>{weapon.name}</option>)
                            }
                        )
                }
            </select>
        </div>
    )
}

export default WishInput