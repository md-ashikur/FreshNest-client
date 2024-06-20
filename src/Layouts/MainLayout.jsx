import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    );
};

export default MainLayout;