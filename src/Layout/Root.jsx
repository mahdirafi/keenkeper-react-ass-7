import { Outlet } from "react-router";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";
 

 
 

const Root = () => {
    return (<> 
             <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>



            </>
    );
};

export default Root;