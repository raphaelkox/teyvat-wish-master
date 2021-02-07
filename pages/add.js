import { useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import MyContext from '../MyContext'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'

const Add = ({ characters, weapons }) => {
	const {items, setItem, setItems, setUnsaved, blocked, setBlocked} = useContext(MyContext)

	const initialWish = {
		wishType: 'character',
		wishItem: 'Albedo'
	};		

	const addItem = () => {		
		const newItems = items.map(item => item)
		newItems.push(initialWish)
		setItems(newItems);
		setUnsaved(true);
	}

	console.log(blocked)

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
			{
				blocked && 
				<div className='z-50 fixed w-full min-h-screen flex justify-center items-center bg-black bg-opacity-70'>
					<div className='p-1 w-64 h-24 bg-gray-700 text-center text-white'>
						<div>Discard Changes?</div>
						<div className='flex justify-center'>
							<div className='py-2 flex-grow h-10 bg-gray-500' onClick={() => {
								setItems([])
								setUnsaved(false)
								setBlocked(false)
							}}>
								Yes
							</div>
							<div className='py-2 flex-grow h-10 bg-gray-500' onClick={() => {
								setBlocked(false)
							}}>
								No
							</div>
						</div>
					</div>
				</div>
			}			
		</Layout>
	)
}

export default Add

export async function getStaticProps(ctx){
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