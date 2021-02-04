import { useRouter } from 'next/router'

const Navbutton = (props) => {
    const router = useRouter()

    return(
        <div 
            className={'w-full flex justify-center items-center ' + 
            (props.selected === 'true' ? 'bg-gray-500' : '') }
            onClick={() => { router.push('/' + props.page) }}
        >
                <div>{ props.label }</div>
        </div>
    )
}

export default Navbutton;