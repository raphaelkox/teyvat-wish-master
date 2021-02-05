const AddWishInputButton = (props) => {
    return(
        <div className='my-2 w-16 h-8 text-lg text-white text-center font-medium self-end 
        rounded-full bg-gray-600' onClick={props.addItem}>
            <div className=''>
                Add
            </div>
        </div>
    )
}

export default AddWishInputButton