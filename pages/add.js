import { useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import AddWishInputButton from '../components/AddWishInputButton'
import WishInput from '../components/WishInput'
import MyContext from '../MyContext'
import dbConnect from '../utils/dbConnect'
import Character from '../models/Character'
import Weapon from '../models/Weapon'

const Add = ({ charsData, weaponsData }) => {
	const {wishes, setWishes, unsaved, setUnsaved } = useContext(MyContext)			

	const clearWishes = () => {
		setWishes([])
		setUnsaved(false)
	}

	/*const saveWishes = async () => {
		try {
			const res = await fetch("http://localhost:3000/api/wish", {
			  method: 'POST',
			  headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			  },
			  body: JSON.stringify( {
				  ,
				  timestamp: moment(),
				  content: tuitContent,
				  likes: 0
			  })
			})
			router.push("/");
		  } catch (error) {
			console.log(error);
		  }
	}*/

	const characters = Object.keys(charsData).map(key => charsData[key])
	const weapons = Object.keys(weaponsData).map(key => weaponsData[key])

	return (
		<Layout nav='add'>
			<div className='m-4 flex flex-col flex-grow bg-gray-800'>
				{
					wishes.map((wish, index) => {
						return(
							<WishInput key={index} wishInputIndex={index} wishType={wish.wishType} wishItemIndex={wish.wishItemIndex} characterData={characters} weaponData={weapons} />
						)
					})
				}
				<AddWishInputButton />
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
					<div className='mx-1 p-2 flex flex-grow rounded-full justify-center items-center bg-gray-600' onClick={clearWishes}>
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
		revalidate: 1
	  }
}