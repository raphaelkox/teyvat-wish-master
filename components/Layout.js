import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    return(
        <>
            <div className='min-h-screen flex flex-col bg-gray-900'>
                <Header />
                    { props.children }
                <Navbar nav={ props.nav }/>
            </div>
        </>
    )
}

export default Layout