import { useState } from 'react'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'

const Add = () => {
	const initialWish = [{
		wishType: 'character',
		wishItem: 'Albedo'
	}]

	const [items, setItems] = useState(initialWish)

	const characters = [
		'Albedo',
		'Amber',
		'Barbara',
		'Bennett',
		'Diluc',
		'Diona',
		'Fischl',
		'Jean',
		'Kaeya',
		'Klee',
		'Lisa',
		'Mona',
		'Noelle',
		'Razor',
		'Sucrose',
		'Venti'
	]

	const weapons = [
		'Harbinger of Dawn',
		'Debate Club',
		'Sharpshooter Oath',
		'Emerald Orb',
		'Favonius Sword',
		'Favonius Codex'
	]

	const setItem = (keyName, index, value)  => {
		const newItems = items.map((item, idx) => {
			if(idx === index){
				if(keyName === 'wishType'){
					const updatedItem = {
						...item,
						wishType: value,
						wishItem: (value === 'character' ? characters[0] : weapons[0])
					}

					return updatedItem
				}
				else{
					const updatedItem = {
						...item,
						[keyName]: value
					}

					return updatedItem
				}								
			}

			return item
		})

		setItems(newItems)
	}	

	const addItem = () => {
		const newItems = items.map(item => item)
		newItems.push(initialWish)
		setItems(newItems);
	}

	return (
		<Layout nav='add'>
			<div className='m-4 flex flex-col flex-grow bg-gray-800'>
				{
					items.map((item, index) => {
						return(
							<WishInput key={index} index={index} wishType={item.wishType} wishItem={item.wishItem} characterData={characters} weaponData={weapons} setItem={setItem} />
						)
					})
				}
				<AddWishInputButton addItem={addItem} />
			</div>
		</Layout>
	)
}

export default Add