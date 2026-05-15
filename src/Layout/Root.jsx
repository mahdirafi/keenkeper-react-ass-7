import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (<>
                    <NavBar/>
                <div className='w-11/12 mx-auto'>
                    <Outlet/>
                </div>
                    <Footer/>
            </>
    );
};

export default Root;