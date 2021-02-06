import { useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import MyContext from '../MyContext'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'

const Add = ({ characters, weapons }) => {
	const {context, setContext} = useContext(MyContext)
	console.log("WHAT")
	console.log(context)

	const initialWish = {
		wishType: 'character',
		wishItem: 'Albedo'
	};		

	const addItem = () => {
		const newItems = context.items.map(item => item)
		newItems.push(initialWish)
		context.setItems(newItems);
	}

	return (
		<Layout nav='add'>
			<div className='m-4 flex flex-col flex-grow bg-gray-800'>
				{
					context.items.map((item, index) => {
						console.log(item);
						return(
							<WishInput key={index} index={index} wishType={item.wishType} wishItem={item.wishItem} characterData={characters} weaponData={weapons} setItem={context.setItem} />
						)
					})
				}
				<AddWishInputButton addItem={addItem} />
			</div>
			{
				context.unsaved === 'true' && 
				<div className='z-50 fixed w-full min-h-screen flex justify-center items-center bg-black bg-opacity-70'>
					<div className='p-1 w-64 h-24 bg-gray-700 text-center text-white'>
						<div>There are unsaved changes that will be lost, are you sure?</div>
						<div className='flex justify-center'>
							<div className='py-2 flex-grow h-10 bg-gray-500'>Yes</div>
							<div className='py-2 flex-grow h-10 bg-gray-500'>No</div>
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