const WishInput = (props) => {
    const handleChange = (e, keyName) => {
        props.setItem(keyName, props.index, e.target.value)        
    }

    return(
        <div className='mb-2 p-1 flex flex-col rounded-xl bg-gray-700'>
            <div className='space-x-2 text-white' value={props.wishType} onChange={(e) => handleChange(e, 'wishType')}>
                <input type='radio' value='character' name='wishType'/> Character
                <input type='radio' value='weapon' name='wishType'/> Weapon
            </div>
            <select className='my-1 rounded-xl' value={props.wishItem} onChange={(e) => handleChange(e, 'wishItem')}>
                {
                    (props.wishType === 'character')
                    ?   props.characterData.map(character =>{
                            return(<option key={character._id} value={character.name}>{character.name}</option>)
                            }
                        )
                    :   props.weaponData.map(weapon =>{
                            return(<option key={weapon._id} value={weapon.name}>{weapon.name}</option>)
                            }
                        )
                }
            </select>
        </div>
    )
}

export default WishInput