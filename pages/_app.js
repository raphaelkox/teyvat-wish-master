import '../styles/globals.css'
import { useState } from 'react'
import MyContext from '../MyContext'

function MyApp({ Component, pageProps }) {

	const [wishes, setWishes] = useState([])
	const [unsaved, setUnsaved] = useState(false)
	const [blocked, setBlocked] = useState(true)
	
	const setWishType = (index, value)  => {
		const newWishes = wishes.map((wish, idx) => {
			if(idx === index){
				const updatedWish = {
					...wish,
					wishType: value,
					wishItemIndex: 0
				}
				return updatedWish
			}
			return wish
		})
		setWishes(newWishes)		
	}

	const setWishItemIndex = (index, value)  => {
		const newWishes = wishes.map((wish, idx) => {
			if(idx === index){				
				const updatedWish = {
					...wish,
					wishItemIndex: value
				}
				return updatedWish							
			}
			return wish
		})
		setWishes(newWishes)
	}

	return (
		<MyContext.Provider value={{
			wishes: wishes,
			setWishType: setWishType,
			setWishItemIndex: setWishItemIndex,
			setWishes: setWishes,
			unsaved: unsaved,
			setUnsaved: setUnsaved,
			blocked: blocked,
			setBlocked: setBlocked,
			user: {}
		}}>
			<Component {...pageProps} />
		</MyContext.Provider>
	)
}

export default MyApp
