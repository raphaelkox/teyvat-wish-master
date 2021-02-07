import { useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import MyContext from '../MyContext'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput'
import AddWishInputButton from '../components/AddWishInputButton'
import DiscardDialog from '../components/DiscardDialog'

const Add = ({ characters, weapons }) => {
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

	const saveItems = () => {
		try {
			const res = await fetch("http://localhost:3000/api/wish", {
				method: 'POST',
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					authorHandle: "raphaelkox",
					timestamp: moment(),
					content: tuitContent,
					likes: 0
				})
			})
			router.push("/");
		} catch (error) {
			console.log(error);
		}		
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