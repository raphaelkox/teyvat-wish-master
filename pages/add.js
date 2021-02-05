import { useState } from 'react'
import Layout from '../components/Layout'
import WishInput from '../components/WishInput';

const Add = () => {
	const [items, setItems] = useState([{
		wishType: 'character',
		wishItem: 'A'
	}]);

	const setItem = (keyName, index, value)  => {
		console.log('------------')
		console.log('values on handler function')
		console.log(keyName)
		console.log(index)
		console.log(value)
		const tempItems = items;
		let item = {
			...tempItems[index],
			[keyName]: value
		}
		console.log('------------')
		console.log('new item')
		console.log(item)
		tempItems[index] = item;
		setItems(tempItems)
		console.log('------------')
		console.log('final state')
		console.log(items)
	}	

	return (
		<Layout nav='add'>
			<div className='m-4 flex flex-col flex-grow bg-gray-800'>
				{
					items.map((item, index) => {
						return(
							<WishInput key={index} index={index} wishType={item.wishType} wishItem={item.wishItem} setItem={setItem} />
						)
					})
				}
				<div className='my-2 w-8 h-8 text-2xl text-white text-center font-bold self-end rounded-full bg-gray-600'>+</div>
			</div>
		</Layout>
	)
}

export default Add;