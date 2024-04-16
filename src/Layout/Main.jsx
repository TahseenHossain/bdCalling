import { Outlet } from 'react-router-dom';
import NavBar from '../Routes/Components/Home/NavBar';
import Footer from '../Routes/Components/Home/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;