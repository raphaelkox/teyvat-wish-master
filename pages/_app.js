import '../styles/globals.css'
import { useState } from 'react'
import MyContext from '../MyContext'

function MyApp({ Component, pageProps }) {

	const [items, setItems] = useState([])
	const [unsaved, setUnsaved] = useState(false)
	const [blocked, setBlocked] = useState(true)
	
	const setItem = (keyName, index, value, characters, weapons)  => {

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

	return (
		<MyContext.Provider value={{
			items: items,
			setItem: setItem,
			setItems: setItems,
			unsaved: unsaved,
			setUnsaved: setUnsaved,
			blocked,
			setBlocked,
			user: {}
		}}>
			<Component {...pageProps} />
		</MyContext.Provider>
	)
}

export default MyApp
