import { useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import MyContext from '../MyContext'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'
import DiscardDialog from '../components/DiscardDialog'
import dbConnect from '../utils/dbConnect'
import Character from '../models/Character'
import Weapon from '../models/Weapon'

const Add = ({ charsData, weaponsData }) => {
	const {items, setItem, setItems, unsaved, setUnsaved } = useContext(MyContext)

	const initialWish = {
		wishType: 'character',
		wishItem: 'Albedo'
	};		

	const addItem = () => {		
		const newItems = items.map(item => item)
		newItems.push(initialWish)
		setItems(newItems)
		setUnsaved(true)
	}

	const clearItems = () => {
		setItems([])
		setUnsaved(false)
	}

	const characters = Object.keys(charsData).map(key => charsData[key])
	const weapons = Object.keys(weaponsData).map(key => weaponsData[key])

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
			unsaved && 
			<>
				<div className='h-14'></div>
				<div className='px-2 py-1 z-50 fixed bottom-14 w-full h-14 flex bg-gray-800'>
					<div className='mx-1 p-2 flex flex-grow rounded-full justify-center items-center bg-gray-600'>
						<div>
							Save
						</div>
					</div>
					<div className='mx-1 p-2 flex flex-grow rounded-full justify-center items-center bg-gray-600' onClick={clearItems}>
						<div>
							Clear
						</div>
					</div>
				</div>
			</>
			}
		</Layout>
	)
}

export default Add

export async function getStaticProps(ctx){
	dbConnect()

	const charsRawData =  await Character.find({})
	const charsData = JSON.parse(JSON.stringify(charsRawData))
	const weaponsRawData =  await Weapon.find({})
	const weaponsData = JSON.parse(JSON.stringify(weaponsRawData))

	if (!charsData || !weaponsData) {
		return {
		  notFound: true,
		}
	  }
	
	  return {
		props: {
			charsData: charsData,
			weaponsData: weaponsData
		}, 
	  }
}