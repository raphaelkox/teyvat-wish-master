import { useContext } from 'react'
import MyContext from '../MyContext'

const DiscardDialog = () => {
    const { setItems, setUnsaved, blocked, setBlocked} = useContext(MyContext)

    return(            
        blocked 
        ?   (<div className='z-50 fixed w-full min-h-screen flex justify-center items-center bg-black bg-opacity-70'>
                <div className='p-1 w-64 h-24 bg-gray-700 text-center text-white'>
                    <div>Discard Changes?</div>
                    <div className='flex justify-center'>
                        <div className='py-2 flex-grow h-10 bg-gray-500' onClick={() => {
                            setItems([])
                            setUnsaved(false)
                            setBlocked(false)
                        }}>
                            Yes
                        </div>
                        <div className='py-2 flex-grow h-10 bg-gray-500' onClick={() => {
                            setBlocked(false)
                        }}>
                            No
                        </div>
                    </div>
                </div>
            </div>)
        : null
    )
}

export default DiscardDialog