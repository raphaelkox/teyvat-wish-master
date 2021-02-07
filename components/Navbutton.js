import { useContext } from 'react'
import { useRouter } from 'next/router'
import MyContext from '../MyContext'

const Navbutton = (props) => {
    const router = useRouter()
    const {unsaved, setBlocked} = useContext(MyContext)

    return(
        <div 
            className={'w-full flex justify-center items-center ' + 
            (props.selected === 'true' ? 'bg-gray-600' : '') }
            onClick={() => {
                    if(!unsaved){
                        router.push('/' + props.page) 
                    }
                    else{
                        console.log('BLOCKED?')
                        setBlocked(true)
                    }
                }}
        >
                <div>{ props.label }</div>
        </div>
    )
}

export default Navbutton