const Progressbar = (props) => {
    const width = props.value / props.max;

    return(
        <div className='my-2 h-3 flex rounded-xl bg-gray-500'>
            <div 
                style={{
                    transform: `translate3d(0, 0, 0) scaleX(${width})`
                }}
                className='w-full h-3 origin-left  rounded-xl bg-gray-300'></div>
        </div>
    )
}

export default Progressbar;