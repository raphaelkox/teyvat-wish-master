import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'

const Add = ({ characters, weapons }) => {
	const initialWish = [{
		wishType: 'character',
		wishItem: 'Albedo'
	}]

	const [items, setItems] = useState(initialWish)

	const setItem = (keyName, index, value)  => {
		const newItems = items.map((item, idx) => {
			if(idx === index){
				if(keyName === 'wishType'){
					const updatedItem = {
						...item,
						wishType: value,
						wishItem: (value === 'character' ? characters[0].name : weapons[0].name)
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

export async function getStaticProps(context){
	const charRes = await fetch('http://localhost:3000/api/character')
	const charRawData = await charRes.json()
	const charData = Object.keys(charRawData.data).map(key => charRawData.data[key])
	
	const weaponRes = await fetch('http://localhost:3000/api/weapon')
	const weaponRawData = await weaponRes.json()
	const weaponData = Object.keys(weaponRawData.data).map(key => weaponRawData.data[key])

	if (!charData || !weaponData) {
		return {
		  notFound: true,
		}
	  }
	
	  return {
		props: {
			characters: charData,
			weapons: weaponData
		}, // will be passed to the page component as props
	  }
}