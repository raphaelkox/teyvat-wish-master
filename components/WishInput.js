const WishInput = (props) => {
    const handleChange = (e, keyName) => {
        console.log('------------')
        console.log('new values from input')
        console.log(keyName)
        console.log(e.target.value)
        props.setItem(keyName, props.index, e.target.value)        
    }

    return(
        <div className='p-4 flex flex-col rounded-xl bg-gray-700'>
            <div className='space-x-2 text-white' value={props.wishType} onChange={(e) => handleChange(e, 'wishType')}>
                <input type='radio' value='character' name='wishType' defaultChecked/> Character
                <input type='radio' value='weapon' name='wishType'/> Weapon
            </div>
            <select className='my-2 rounded-xl' value={props.wishItem} onChange={(e) => handleChange(e, 'wishItem')}>
                {
                    (props.wishType === 'character')
                    ?   props.characterData.map(character =>{
                            return(<option key={character} value={character}>{character}</option>)
                            }
                        )
                    :   props.weaponData.map(weapon =>{
                            return(<option key={weapon} value={weapon}>{weapon}</option>)
                            }
                        )
                }
            </select>
        </div>
    )
}

export default WishInput;