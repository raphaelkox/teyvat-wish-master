import Navbutton from './Navbutton'

const Navbar = (props) => {
    return(
        <>
            <div className='h-14'></div>
            <div className='fixed bottom-0 w-full h-14 flex bg-gray-800'>
                <Navbutton label='Stats' page='' selected={ (props.nav === 'stats' ? 'true' : 'false') }/>
                <Navbutton label='Add' page='add' selected={ (props.nav === 'add' ? 'true' : 'false') }/>
                <Navbutton label='Character' page='character' selected={ (props.nav === 'character' ? 'true' : 'false') }/>
            </div>
        </>
    )
}

export default Navbar;