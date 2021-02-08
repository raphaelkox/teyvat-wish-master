import {useContext} from 'react'
import MyContext from '../MyContext'

const AddWishInputButton = () => {
    const {wishes, setWishes, setUnsaved} = useContext(MyContext)

    const initialWish = {
		wishType: 'character',
		wishItemIndex: '0'
	};	

    const addWish = () => {		
		const newWishes = wishes.map(wish => wish)
		newWishes.push(initialWish)
		setWishes(newWishes)
		setUnsaved(true)
	}

    return(
        <div className='my-2 w-16 h-8 text-lg text-white text-center font-medium self-end 
        rounded-full bg-gray-600' onClick={addWish}>
            <div className='select-none'>
                Add
            </div>
        </div>
    )
}

export default AddWishInputButton