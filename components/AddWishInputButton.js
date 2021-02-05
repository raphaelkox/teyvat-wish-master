const AddWishInputButton = (props) => {
    return(
        <div className='my-2 w-8 h-8 text-2xl text-white text-center font-bold self-end 
				rounded-full bg-gray-600' onClick={props.addItem}>+</div>
    )
}

export default AddWishInputButton