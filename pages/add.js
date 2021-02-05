import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'

const Add = ({ characters, weapons }) => {
	const initialWish = {
		wishType: 'character',
		wishItem: 'Albedo'
	};

	const [items, setItems] = useState([])	

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
						console.log(item);
						return(
							<WishInput key={index} index={index} wishType={item.wishType} wishItem={item.wishItem} characterData={characters} weaponData={weapons} setItem={setItem} />
						)
					})
				}
				<AddWishInputButton addItem={addItem} />
			</div>
			<div className='z-50 fixed w-full min-h-screen flex justify-center items-center bg-black bg-opacity-70'>
				<div className='p-1 w-64 h-24 bg-gray-700 text-center text-white'>
					<div>There are unsaved changes that will be lost, are you sure?</div>
					<div className='flex justify-center'>
						<div className='py-2 flex-grow h-10 bg-gray-500'>Yes</div>
						<div className='py-2 flex-grow h-10 bg-gray-500'>No</div>
					</div>
				</div>
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
		}, 
	  }
}