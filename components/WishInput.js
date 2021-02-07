const WishInput = (props) => {
    const handleChange = (e, keyName) => {
        props.setItem(keyName, props.index, e.target.value, props.characterData, props.weaponData)        
    }

    return(
        <div className='mb-2 p-1 flex flex-col rounded-xl bg-gray-700'>
            <div className='space-x-2 text-white' value={props.wishType} onChange={(e) => handleChange(e, 'wishType')}>
                {
                    (props.wishType === 'character')
                    ?   (
                            <>
                                <input type='radio' value='character' name={'wishType' + props.index} defaultChecked/> Character
                                <input type='radio' value='weapon' name={'wishType' + props.index} /> Weapon
                            </>
                        )
                    :   (
                            <>
                                <input type='radio' value='character' name={'wishType' + props.index} /> Character
                                <input type='radio' value='weapon' name={'wishType' + props.index} defaultChecked/> Weapon
                            </>
                        )
                }
            </div>
            <select className='my-1 outline-none rounded-xl' value={props.wishItem} onChange={(e) => handleChange(e, 'wishItem')}>
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