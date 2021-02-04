import { useState } from 'react'
import Layout from '../components/Layout'

const Add = () => {
	const [items, setItems] = useState(1);

	return (
		<Layout nav='add'>
			<div className='m-4 flex flex-col flex-grow bg-gray-800'>
				<div className='p-4 flex flex-col rounded-xl bg-gray-700'>
					<div className='space-x-2 text-white'>
						<input type='radio' value='Character' name='wishType'/> Character
						<input type='radio' value='Weapon' name='wishType'/> Weapon
					</div>
					<select className='my-2 rounded-xl'>
						<option value='A'>Test 1</option>
						<option value='B'>Test 2</option>
						<option value='C'>Test 3</option>
					</select>
				</div>
				<div className='my-2 w-8 h-8 text-2xl text-white text-center font-bold self-end rounded-full bg-gray-600'>+</div>
			</div>
		</Layout>
	)
}

export default Add;